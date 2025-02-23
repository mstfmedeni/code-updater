package com.codeupdater

import androidx.fragment.app.FragmentActivity
import androidx.lifecycle.lifecycleScope
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import kotlinx.coroutines.launch

class CodeUpdaterModule internal constructor(
    context: ReactApplicationContext,
) : CodeUpdaterSpec(context) {
    private val mReactApplicationContext: ReactApplicationContext = context

    override fun getName(): String = NAME

    @ReactMethod
    override fun reload() {
        CodeUpdater.reload(mReactApplicationContext)
    }

    @ReactMethod
    override fun getAppVersion(promise: Promise) {
        promise.resolve(CodeUpdater.getAppVersion(mReactApplicationContext))
    }

    @ReactMethod
    override fun updateBundle(
        bundleId: String,
        zipUrl: String?,
        promise: Promise,
    ) {
        // Use lifecycleScope when currentActivity is FragmentActivity
        (currentActivity as? FragmentActivity)?.lifecycleScope?.launch {
            val isSuccess =
                CodeUpdater.updateBundle(
                    mReactApplicationContext,
                    bundleId,
                    zipUrl,
                ) { progress ->
                    val params =
                        WritableNativeMap().apply {
                            putDouble("progress", progress)
                        }

                    this@CodeUpdaterModule
                        .mReactApplicationContext
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                        .emit("onProgress", params)
                }
            promise.resolve(isSuccess)
        }
    }

    override fun addListener(eventName: String?) {
        // No-op
    }

    override fun removeListeners(count: Double) {
        // No-op
    }

    companion object {
        const val NAME = "CodeUpdater"
    }
}
