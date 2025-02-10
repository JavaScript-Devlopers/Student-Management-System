# React Native essentials
-keep public class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }

# Prevent obfuscation of Retrofit and Gson models
-keep class com.google.gson.** { *; }
-keep class retrofit2.** { *; }

# Keep Parcelable models
-keepclassmembers class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Don't warn missing classes in some libraries
-dontwarn org.codehaus.mojo.animal_sniffer.*
-dontwarn com.squareup.picasso.**
-dontwarn com.google.android.gms.**
-dontwarn com.google.firebase.**

# Strip out logging and debugging information
-assumenosideeffects class android.util.Log { 
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
    public static *** w(...);
}
