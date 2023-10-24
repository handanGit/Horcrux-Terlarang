gdjs.Intro_32gemCode = {};
gdjs.Intro_32gemCode.GDNewObjectObjects1= [];
gdjs.Intro_32gemCode.GDNewObjectObjects2= [];
gdjs.Intro_32gemCode.GDNewObject2Objects1= [];
gdjs.Intro_32gemCode.GDNewObject2Objects2= [];
gdjs.Intro_32gemCode.GDuiiObjects1= [];
gdjs.Intro_32gemCode.GDuiiObjects2= [];


gdjs.Intro_32gemCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, ("SplashScreen"));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu-", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Intro_32gemCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_32gemCode.GDNewObjectObjects1.length = 0;
gdjs.Intro_32gemCode.GDNewObjectObjects2.length = 0;
gdjs.Intro_32gemCode.GDNewObject2Objects1.length = 0;
gdjs.Intro_32gemCode.GDNewObject2Objects2.length = 0;
gdjs.Intro_32gemCode.GDuiiObjects1.length = 0;
gdjs.Intro_32gemCode.GDuiiObjects2.length = 0;

gdjs.Intro_32gemCode.eventsList0(runtimeScene);

return;

}

gdjs['Intro_32gemCode'] = gdjs.Intro_32gemCode;
