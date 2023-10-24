gdjs.PrologCode = {};
gdjs.PrologCode.GDBGObjects1= [];
gdjs.PrologCode.GDBGObjects2= [];
gdjs.PrologCode.GDPrologTxObjects1= [];
gdjs.PrologCode.GDPrologTxObjects2= [];
gdjs.PrologCode.GDPrologObjects1= [];
gdjs.PrologCode.GDPrologObjects2= [];
gdjs.PrologCode.GDNewObjectObjects1= [];
gdjs.PrologCode.GDNewObjectObjects2= [];


gdjs.PrologCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game-", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game-", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game-", false);
}}

}


};

gdjs.PrologCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PrologCode.GDBGObjects1.length = 0;
gdjs.PrologCode.GDBGObjects2.length = 0;
gdjs.PrologCode.GDPrologTxObjects1.length = 0;
gdjs.PrologCode.GDPrologTxObjects2.length = 0;
gdjs.PrologCode.GDPrologObjects1.length = 0;
gdjs.PrologCode.GDPrologObjects2.length = 0;
gdjs.PrologCode.GDNewObjectObjects1.length = 0;
gdjs.PrologCode.GDNewObjectObjects2.length = 0;

gdjs.PrologCode.eventsList0(runtimeScene);

return;

}

gdjs['PrologCode'] = gdjs.PrologCode;
