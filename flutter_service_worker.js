'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cccd69c559b3265809cf1e1f54631263",
"index.html": "c6a1a546b11a2e9eccf3a0bfab868e55",
"/": "3b407be55f65e0328bba43af010f26dc",
"main.dart.js": "e34ebde0b7060eaca4f417a059fbad27",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "639b10387d5808daad5f17129500782d",
".git/AUTO_MERGE": "0c630f77d7fb56d6f06dc15d92bc0d3b",
".git/ORIG_HEAD": "1decf722ae5c156c78bf1164a9a980cb",
".git/config": "9b6cc17b57a12d525613ec29659bf087",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/690a1dcd32e6f6064f506cf5d060ea76d14f3c": "e558fef6fe882fac46209751053d0c56",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/pack/pack-07641c883a2429fd49b38a39540331edaf224c15.idx": "55947598383c38d4258cb13acd5300a9",
".git/objects/pack/pack-07641c883a2429fd49b38a39540331edaf224c15.pack": "8ed03c8ab2d1c57d4739d5cc2d1aba05",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/53/c6183abd3fce9ad0160ab41d84f1a2ff18721f": "c3dacd3730a02cfca272065c8a90ddc0",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a6/395b96596ec9070687f6acd472ca1adf0c6ae5": "9f3b9bbf2a5bdc9bb71c2cb25049e73d",
".git/objects/2c/fb8b8fb8b44434b1819c48fe7c0fcd44ddacfa": "3a0e3940691e868b745b86afdafd8c9a",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/HEAD": "7f573054fea1f948d1771058aad9d459",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4921ef18ffd040619c122661ef3998d6",
".git/logs/refs/heads/host": "bc595db45a4eefb38ca5e782d2b471bb",
".git/logs/refs/remotes/origin/host": "cf59ce8a1dd438422b7a32ce1d001ba2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/host": "e2ef6dda43ab3554bac5b64540ce49f1",
".git/refs/remotes/origin/host": "9eff66547d541a82a2ceec66fa0c3f80",
".git/index": "b39e9a269bdd9ee3df7bad78fe6799d2",
".git/COMMIT_EDITMSG": "ab41a68c9a70a6215053441aaf7373a4",
".git/FETCH_HEAD": "fe98e55651f261f5481b755616f4f791",
"connect/macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"connect/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"connect/macos/RunnerTests/RunnerTests.swift": "6268cffb63d969b61f7b4e3005239256",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"connect/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"connect/macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"connect/macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"connect/macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"connect/macos/Runner/Configs/AppInfo.xcconfig": "ffb90d4c0112241e19e42331c539e238",
"connect/macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"connect/macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"connect/macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"connect/macos/Runner/AppDelegate.swift": "ce90ac27873ef28bc53a7dbc142459e5",
"connect/macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"connect/macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"connect/macos/Runner.xcodeproj/project.pbxproj": "9bd9a632fd61e0a3d39be2433cee833e",
"connect/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"connect/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "ed7d0c4e6ba2a530140e939fb4ec143e",
"connect/macos/Flutter/Flutter-Debug.xcconfig": "5699404db81f3897cb3d40ce86ee8a1c",
"connect/macos/Flutter/GeneratedPluginRegistrant.swift": "f5bf97d782f165c29cd53309374fb655",
"connect/macos/Flutter/Flutter-Release.xcconfig": "d77c83fba1179be363f387359a9ed946",
"connect/macos/Podfile": "19d897bd7231205aa401fb43db07713f",
"connect/test/widget_test.dart": "d41d8cd98f00b204e9800998ecf8427e",
"connect/web/index.html": "3b407be55f65e0328bba43af010f26dc",
"connect/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"connect/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"connect/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"connect/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"connect/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"connect/web/manifest.json": "639b10387d5808daad5f17129500782d",
"connect/pubspec.lock": "c4b15a3d4acc7dd81606b4f634f533b3",
"connect/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"connect/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"connect/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"connect/ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"connect/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"connect/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"connect/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"connect/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"connect/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"connect/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"connect/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"connect/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"connect/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"connect/ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"connect/ios/Runner/Info.plist": "742ced4e56fc4eb39c4a86a32dd199b0",
"connect/ios/Runner.xcodeproj/project.pbxproj": "b845f8372c84cf57e2fe226851dee943",
"connect/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"connect/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"connect/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"connect/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "9565201a0f1b0d623e0c0445455d52a8",
"connect/ios/Flutter/Debug.xcconfig": "46d49915c32600030d79cd085ab92cf9",
"connect/ios/Flutter/Release.xcconfig": "b60ff1c5444e52fc259cf0169dfbe87d",
"connect/ios/Flutter/AppFrameworkInfo.plist": "a25bf969a6a92bae1dbdf68f4e6e5b3b",
"connect/ios/Podfile": "93216fe0d639642d4a382e8a79bfcadf",
"connect/README.md": "43a4aecb1b1af673f51723f6be10cd0d",
"connect/pubspec.yaml": "3bbc7baf0b64f960aa4389da21eb19f4",
"connect/linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"connect/linux/CMakeLists.txt": "7e66e706f794cacc218ec49ac054832b",
"connect/linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"connect/linux/my_application.cc": "495ecd05562ffcfabaf9d3d21bf4abd8",
"connect/linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"connect/linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"connect/linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"connect/linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"connect/android/app/build.gradle": "a292d70b41293e21c852d205fcb9b2ff",
"connect/android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"connect/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"connect/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"connect/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"connect/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"connect/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"connect/android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"connect/android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"connect/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"connect/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"connect/android/app/src/main/AndroidManifest.xml": "ec27d8f071a3bd9dfc63b7a022546b2b",
"connect/android/app/src/main/kotlin/com/mdsc/connect/connect/MainActivity.kt": "19f38fb4fc33abafd588bf1b2aa2a580",
"connect/android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"connect/android/gradle/wrapper/gradle-wrapper.properties": "9954c54e2024747de137abef4cdd309c",
"connect/android/build.gradle": "7632ea1d88d5a4f435b7fdb65214f4e3",
"connect/android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"connect/android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"connect/lib/app/modules/home/bindings/home_binding.dart": "6b8929344610f8732326efdebc9d6b7c",
"connect/lib/app/modules/home/controllers/home_controller.dart": "d659f0f89fcfd290a04aeddf04e3aa26",
"connect/lib/app/modules/home/views/home_view.dart": "6faea5b31e951704a072cb9df0cbfd18",
"connect/lib/app/modules/home/widgets/main_page.dart": "6c92d5d952850f9bbf0e68ed447e4fda",
"connect/lib/app/modules/home/widgets/no_data_page.dart": "fcee818996e1b4198e5243e1ec8997bd",
"connect/lib/app/modules/home/widgets/header.dart": "9d3ae03fb483eb9ff95de3bb5e0fb1c9",
"connect/lib/app/modules/home/widgets/footer.dart": "1011f2c8c71e2d867c4febbdf35981d4",
"connect/lib/app/modules/home/widgets/appbar.dart": "ef49676122127b3df29bc8039b38382e",
"connect/lib/app/modules/home/widgets/birthday_card_view.dart": "28827877a6e6aa6f086b83da8e649c54",
"connect/lib/app/modules/utils/responsive_helper.dart": "b7ed5226c7d711333af4c7ae9629da78",
"connect/lib/app/modules/utils/theme.dart": "e41df7c871a191d747b6a6d4a53ca772",
"connect/lib/app/data/providers/teacher_provider.dart": "f6bae696dc0db9562bc6de05d6f187b7",
"connect/lib/app/data/providers/students_provider.dart": "0f7ac4d13980d14e54581c1b50c655bd",
"connect/lib/app/data/providers/emailer_provider.dart": "9443b0df894c0e132fab1114cf810cb8",
"connect/lib/app/data/models/teacher_model.dart": "93da85181c15d0d16065b3fa949d36ff",
"connect/lib/app/data/models/students_model.dart": "0e7d1cfc1dccef28d14033df42617ea9",
"connect/lib/app/routes/app_pages.dart": "be267fdac0c5ab0df1095edaa0787724",
"connect/lib/app/routes/app_routes.dart": "f68cf63b94537d4091cd0ad6d11138be",
"connect/lib/main.dart": "0d41b813deca3fa34ab201476a9eef1f",
"connect/analysis_options.yaml": "90ca05185a2de012cebf6fb9f85f3598",
"connect/windows/CMakeLists.txt": "044ccb1a89e6c60da289ea44c9d6ebf9",
"connect/windows/runner/flutter_window.cpp": "13f3805c97491b594db63fae59e688aa",
"connect/windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"connect/windows/runner/utils.cpp": "c8ab2070ab710025a405b8e44dd7174d",
"connect/windows/runner/runner.exe.manifest": "19a145783806442d541438903cc9be98",
"connect/windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"connect/windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f",
"connect/windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"connect/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"connect/windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"connect/windows/runner/Runner.rc": "e14349c9c5fa201d7f71d6ee6b306e4e",
"connect/windows/runner/main.cpp": "778b0896569a586b670b7accda58d022",
"connect/windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"connect/windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"connect/windows/flutter/CMakeLists.txt": "7fcf749e1f5907bc37e680385971ae1c",
"connect/windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"connect/windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"connect/assets/images/bg-large.png": "e159ce97d428e47236197d272ed6ac59",
"connect/assets/images/bg-small.png": "8c6401906c970da4b7fd59053fc43234",
"connect/assets/images/bg-small-no-data.png": "be4c9a11df7bdb175a6a070ee88d4789",
"connect/assets/images/bg-large-no-data.png": "0f6e7f17ee7a2476b0e60d2d7102ca75",
"connect/assets/json/teacher.json": "c3d3ba283614da5d62bca3e576c0ddc9",
"connect/assets/json/student.json": "8cf7fca2519e4e72c997bb64fa26a053",
"connect/assets/icons/arrow.png": "166ba977118dd62d59dc2fa871875022",
"connect/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"connect/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"connect/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"connect/assets/fonts/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"connect/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/AssetManifest.json": "81eabf2eb852bc706784c5691d11ecc2",
"assets/NOTICES": "25f5ee6b92bfce48e0b740731c1e4421",
"assets/FontManifest.json": "73cbd5abd0b0a8b01fdb82cbb45b4d08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f6e3c73534e3cefe514428174fcdea85",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/bg-large.png": "e159ce97d428e47236197d272ed6ac59",
"assets/assets/images/bg-small.png": "8c6401906c970da4b7fd59053fc43234",
"assets/assets/images/bg-small-no-data.png": "be4c9a11df7bdb175a6a070ee88d4789",
"assets/assets/images/bg-large-no-data.png": "0f6e7f17ee7a2476b0e60d2d7102ca75",
"assets/assets/icons/arrow.png": "166ba977118dd62d59dc2fa871875022",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
