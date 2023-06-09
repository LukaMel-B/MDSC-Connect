import 'package:connect/app/modules/home/controllers/home_controller.dart';
import 'package:connect/app/modules/home/widgets/birthday_card_view.dart';
import 'package:connect/app/modules/home/widgets/footer.dart';
import 'package:connect/app/modules/home/widgets/header.dart';
import 'package:connect/app/modules/utils/responsive_helper.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'dart:math' as math;
import 'package:sizer/sizer.dart';

import 'appbar.dart';

class MainPageWidget extends GetView<HomeController> {
  const MainPageWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const AppBarWidget(),
        const Divider(
          color: Colors.white,
          thickness: 1,
          height: 0,
        ),
        SizedBox(
          height: ResponsiveValueSet.spaceAfterAppBar(context),
        ),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 5.w),
          child: Column(
            children: [
              const HeaderWidget(),
              SizedBox(
                height: ResponsiveValueSet.spaceAfterAppBar(context) - 1.7.h,
              ),
              Obx(() {
                return (controller.loading.value)
                    ? SizedBox(
                        height: 15.w,
                        child: Center(
                            child: Transform.scale(
                          scale: 0.6,
                          child: const CircularProgressIndicator(
                            color: Colors.white,
                            strokeWidth: 1.7,
                          ),
                        )),
                      )
                    : Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Image.asset(
                            'assets/icons/arrow.png',
                            width: ResponsiveValueSet.arrowSize(context),
                          ),
                          SizedBox(
                            width: ResponsiveValueSet.birthdayCardPaddingSides(
                                context),
                          ),
                          Expanded(
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                SingleChildScrollView(
                                  physics: const BouncingScrollPhysics(
                                      decelerationRate:
                                          ScrollDecelerationRate.normal),
                                  scrollDirection: Axis.horizontal,
                                  child: Padding(
                                    padding: EdgeInsets.symmetric(
                                        horizontal: ResponsiveValueSet
                                            .birthdayCardSidePadding(context),
                                        vertical: 2.h),
                                    child: Wrap(
                                      spacing: ResponsiveValueSet
                                          .birthdayCardSpaceBetween(context),
                                      direction: Axis.horizontal,
                                      children: listViewBuilder(context),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          SizedBox(
                            width: ResponsiveValueSet.spaceAfterAppBar(context),
                          ),
                          RotatedBox(
                              quarterTurns: -2,
                              child: Image.asset(
                                'assets/icons/arrow.png',
                                width: ResponsiveValueSet.arrowSize(context),
                              )),
                        ],
                      );
              })
            ],
          ),
        ),
        const Expanded(child: SizedBox()),
        const FooterWidget()
      ],
    );
  }

  List<Widget> listViewBuilder(BuildContext context) {
    HomeController controller = Get.find();
    final List<Widget> children = [];
    int indexS = 0;
    int indexT = 0;
    for (var i = 0;
        i < controller.students.length + controller.teachers.length;
        i++) {
      if (i.isEven) {
        children.add(
          Transform.rotate(
            angle: -math.pi / 30,
            child: BirthdayCardView(
              type: 0,
              name: controller.students[indexS].studentName,
              data:
                  '''Age: ${DateTime.now().year - controller.students[indexS].dob.year}
Course: ${controller.students[indexS].course}
Batch: ${controller.students[indexS].batchYear}''',
              image: controller.students[indexS].profilePic,
            ),
          ),
        );
        indexS = indexS + 1;
      } else {
        children.add(
          Transform.rotate(
            angle: math.pi / 30,
            child: BirthdayCardView(
              type: 1,
              name: controller.teachers[indexT].staffName,
              data:
                  '''Age: ${DateTime.now().year - controller.teachers[indexT].dob.year}
${controller.teachers[indexT].designation}
Dep: ${controller.teachers[indexT].department}''',
              image: controller.teachers[indexT].profilePic,
            ),
          ),
        );
        indexT = indexT + 1;
      }
    }
    return children;
  }
}
