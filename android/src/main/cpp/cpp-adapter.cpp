#include <jni.h>
#include "reactnativedesignOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::reactnativedesign::initialize(vm);
}
