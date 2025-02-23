#import <React/RCTEventEmitter.h>
#import <React/RCTBundleURLProvider.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import "CodeUpdaterSpec.h"
@interface CodeUpdater : RCTEventEmitter <NativeCodeUpdaterSpec>
#else
#import <React/RCTBridgeModule.h>
@interface CodeUpdater : RCTEventEmitter <RCTBridgeModule>
#endif // RCT_NEW_ARCH_ENABLED

@property (nonatomic, assign) NSTimeInterval lastUpdateTime;
+ (NSURL *)bundleURL;

@end
