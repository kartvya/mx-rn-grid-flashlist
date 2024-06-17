
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMxRnGridFlashlistSpec.h"

@interface MxRnGridFlashlist : NSObject <NativeMxRnGridFlashlistSpec>
#else
#import <React/RCTBridgeModule.h>

@interface MxRnGridFlashlist : NSObject <RCTBridgeModule>
#endif

@end
