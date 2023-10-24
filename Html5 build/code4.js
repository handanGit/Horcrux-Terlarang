gdjs.ScoreBoard_45Code = {};
gdjs.ScoreBoard_45Code.GDFinalScoreObjects1= [];
gdjs.ScoreBoard_45Code.GDFinalScoreObjects2= [];
gdjs.ScoreBoard_45Code.GDRetryBtObjects1= [];
gdjs.ScoreBoard_45Code.GDRetryBtObjects2= [];
gdjs.ScoreBoard_45Code.GDNextBtObjects1= [];
gdjs.ScoreBoard_45Code.GDNextBtObjects2= [];
gdjs.ScoreBoard_45Code.GDMenuBtObjects1= [];
gdjs.ScoreBoard_45Code.GDMenuBtObjects2= [];
gdjs.ScoreBoard_45Code.GDRetryTxObjects1= [];
gdjs.ScoreBoard_45Code.GDRetryTxObjects2= [];
gdjs.ScoreBoard_45Code.GDMainTxObjects1= [];
gdjs.ScoreBoard_45Code.GDMainTxObjects2= [];
gdjs.ScoreBoard_45Code.GDNextTxObjects1= [];
gdjs.ScoreBoard_45Code.GDNextTxObjects2= [];
gdjs.ScoreBoard_45Code.GDBgObjects1= [];
gdjs.ScoreBoard_45Code.GDBgObjects2= [];
gdjs.ScoreBoard_45Code.GDNewObjectObjects1= [];
gdjs.ScoreBoard_45Code.GDNewObjectObjects2= [];
gdjs.ScoreBoard_45Code.GDSummaryObjects1= [];
gdjs.ScoreBoard_45Code.GDSummaryObjects2= [];
gdjs.ScoreBoard_45Code.GDCoinObjects1= [];
gdjs.ScoreBoard_45Code.GDCoinObjects2= [];
gdjs.ScoreBoard_45Code.GDDiamondObjects1= [];
gdjs.ScoreBoard_45Code.GDDiamondObjects2= [];
gdjs.ScoreBoard_45Code.GDdiamond2Objects1= [];
gdjs.ScoreBoard_45Code.GDdiamond2Objects2= [];
gdjs.ScoreBoard_45Code.GDcoin2Objects1= [];
gdjs.ScoreBoard_45Code.GDcoin2Objects2= [];
gdjs.ScoreBoard_45Code.GDNewObject2Objects1= [];
gdjs.ScoreBoard_45Code.GDNewObject2Objects2= [];
gdjs.ScoreBoard_45Code.GDDiamondAObjects1= [];
gdjs.ScoreBoard_45Code.GDDiamondAObjects2= [];
gdjs.ScoreBoard_45Code.GDCoinAObjects1= [];
gdjs.ScoreBoard_45Code.GDCoinAObjects2= [];


gdjs.ScoreBoard_45Code.mapOfGDgdjs_9546ScoreBoard_959545Code_9546GDRetryBtObjects1Objects = Hashtable.newFrom({"RetryBt": gdjs.ScoreBoard_45Code.GDRetryBtObjects1});
gdjs.ScoreBoard_45Code.mapOfGDgdjs_9546ScoreBoard_959545Code_9546GDNextBtObjects1Objects = Hashtable.newFrom({"NextBt": gdjs.ScoreBoard_45Code.GDNextBtObjects1});
gdjs.ScoreBoard_45Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RetryBt"), gdjs.ScoreBoard_45Code.GDRetryBtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreBoard_45Code.mapOfGDgdjs_9546ScoreBoard_959545Code_9546GDRetryBtObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("NextBt"), gdjs.ScoreBoard_45Code.GDNextBtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreBoard_45Code.mapOfGDgdjs_9546ScoreBoard_959545Code_9546GDNextBtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game-", false);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.ScoreBoard_45Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Diamond"), gdjs.ScoreBoard_45Code.GDDiamondObjects1);
{for(var i = 0, len = gdjs.ScoreBoard_45Code.GDDiamondObjects1.length ;i < len;++i) {
    gdjs.ScoreBoard_45Code.GDDiamondObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.ScoreBoard_45Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.ScoreBoard_45Code.GDCoinObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15047396);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound effect Directed by Robert B Weide (mp3cut.net).mp3", 1, false, 100, 1);
}}

}


};

gdjs.ScoreBoard_45Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ScoreBoard_45Code.GDFinalScoreObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDFinalScoreObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDRetryBtObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDRetryBtObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDNextBtObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDNextBtObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDMenuBtObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDMenuBtObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDRetryTxObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDRetryTxObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDMainTxObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDMainTxObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDNextTxObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDNextTxObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDBgObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDBgObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDNewObjectObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDNewObjectObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDSummaryObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDSummaryObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDCoinObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDCoinObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDDiamondObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDDiamondObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDdiamond2Objects1.length = 0;
gdjs.ScoreBoard_45Code.GDdiamond2Objects2.length = 0;
gdjs.ScoreBoard_45Code.GDcoin2Objects1.length = 0;
gdjs.ScoreBoard_45Code.GDcoin2Objects2.length = 0;
gdjs.ScoreBoard_45Code.GDNewObject2Objects1.length = 0;
gdjs.ScoreBoard_45Code.GDNewObject2Objects2.length = 0;
gdjs.ScoreBoard_45Code.GDDiamondAObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDDiamondAObjects2.length = 0;
gdjs.ScoreBoard_45Code.GDCoinAObjects1.length = 0;
gdjs.ScoreBoard_45Code.GDCoinAObjects2.length = 0;

gdjs.ScoreBoard_45Code.eventsList0(runtimeScene);

return;

}

gdjs['ScoreBoard_45Code'] = gdjs.ScoreBoard_45Code;
