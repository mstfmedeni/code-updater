package com.codeupdater

import com.facebook.react.bridge.ReactApplicationContext

abstract class CodeUpdaterSpec internal constructor(
    context: ReactApplicationContext,
) : NativeCodeUpdaterSpec(context)
