package com.moduledatalogicsdkkt

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager


class ModuleDatalogicsdkKtPackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    //return listOf(ModuleDatalogicsdkKtModule(reactContext))
     return listOf(
      BarcodeManager(reactContext),
      AutoScanTrigger(reactContext),
      KeyboardManager(reactContext),
      LedManager(reactContext),
      ScannerProperties(reactContext)
    ) 
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return emptyList()
  }
}
