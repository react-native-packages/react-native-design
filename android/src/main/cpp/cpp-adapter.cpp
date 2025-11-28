#include <jni.h>
#include "ReactNativeDesignOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::ReactNativeDesign::initialize(vm);
}
