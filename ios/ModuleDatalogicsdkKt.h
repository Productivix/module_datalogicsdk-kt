
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNModuleDatalogicsdkKtSpec.h"

@interface ModuleDatalogicsdkKt : NSObject <NativeModuleDatalogicsdkKtSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ModuleDatalogicsdkKt : NSObject <RCTBridgeModule>
#endif

@end
