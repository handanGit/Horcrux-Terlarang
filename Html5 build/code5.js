gdjs.VictoryCode = {};
gdjs.VictoryCode.GDNewObjectObjects1= [];
gdjs.VictoryCode.GDNewObjectObjects2= [];
gdjs.VictoryCode.GDNewObject2Objects1= [];
gdjs.VictoryCode.GDNewObject2Objects2= [];
gdjs.VictoryCode.GDNewObject3Objects1= [];
gdjs.VictoryCode.GDNewObject3Objects2= [];
gdjs.VictoryCode.GDCoinObjects1= [];
gdjs.VictoryCode.GDCoinObjects2= [];
gdjs.VictoryCode.GDDiamondObjects1= [];
gdjs.VictoryCode.GDDiamondObjects2= [];
gdjs.VictoryCode.GDdiamondAObjects1= [];
gdjs.VictoryCode.GDdiamondAObjects2= [];
gdjs.VictoryCode.GDCoinAObjects1= [];
gdjs.VictoryCode.GDCoinAObjects2= [];
gdjs.VictoryCode.GDRetryBtObjects1= [];
gdjs.VictoryCode.GDRetryBtObjects2= [];
gdjs.VictoryCode.GDNewObject4Objects1= [];
gdjs.VictoryCode.GDNewObject4Objects2= [];
gdjs.VictoryCode.GDmenuTxObjects1= [];
gdjs.VictoryCode.GDmenuTxObjects2= [];


gdjs.VictoryCode.mapOfGDgdjs_9546VictoryCode_9546GDRetryBtObjects1Objects = Hashtable.newFrom({"RetryBt": gdjs.VictoryCode.GDRetryBtObjects1});
gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.VictoryCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Diamond"), gdjs.VictoryCode.GDDiamondObjects1);
{for(var i = 0, len = gdjs.VictoryCode.GDDiamondObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDDiamondObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.VictoryCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDCoinObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RetryBt"), gdjs.VictoryCode.GDRetryBtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_9546VictoryCode_9546GDRetryBtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu-", false);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15080276);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "victoryff (mp3cut.net).mp3", false, 100, 1);
}}

}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDNewObjectObjects1.length = 0;
gdjs.VictoryCode.GDNewObjectObjects2.length = 0;
gdjs.VictoryCode.GDNewObject2Objects1.length = 0;
gdjs.VictoryCode.GDNewObject2Objects2.length = 0;
gdjs.VictoryCode.GDNewObject3Objects1.length = 0;
gdjs.VictoryCode.GDNewObject3Objects2.length = 0;
gdjs.VictoryCode.GDCoinObjects1.length = 0;
gdjs.VictoryCode.GDCoinObjects2.length = 0;
gdjs.VictoryCode.GDDiamondObjects1.length = 0;
gdjs.VictoryCode.GDDiamondObjects2.length = 0;
gdjs.VictoryCode.GDdiamondAObjects1.length = 0;
gdjs.VictoryCode.GDdiamondAObjects2.length = 0;
gdjs.VictoryCode.GDCoinAObjects1.length = 0;
gdjs.VictoryCode.GDCoinAObjects2.length = 0;
gdjs.VictoryCode.GDRetryBtObjects1.length = 0;
gdjs.VictoryCode.GDRetryBtObjects2.length = 0;
gdjs.VictoryCode.GDNewObject4Objects1.length = 0;
gdjs.VictoryCode.GDNewObject4Objects2.length = 0;
gdjs.VictoryCode.GDmenuTxObjects1.length = 0;
gdjs.VictoryCode.GDmenuTxObjects2.length = 0;

gdjs.VictoryCode.eventsList0(runtimeScene);

return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
