gdjs.MainMenu_45Code = {};
gdjs.MainMenu_45Code.GDPlayBtObjects1= [];
gdjs.MainMenu_45Code.GDPlayBtObjects2= [];
gdjs.MainMenu_45Code.GDExitBtObjects1= [];
gdjs.MainMenu_45Code.GDExitBtObjects2= [];
gdjs.MainMenu_45Code.GDPlayTxObjects1= [];
gdjs.MainMenu_45Code.GDPlayTxObjects2= [];
gdjs.MainMenu_45Code.GDExitTxObjects1= [];
gdjs.MainMenu_45Code.GDExitTxObjects2= [];
gdjs.MainMenu_45Code.GDbgObjects1= [];
gdjs.MainMenu_45Code.GDbgObjects2= [];
gdjs.MainMenu_45Code.GDNewObjectObjects1= [];
gdjs.MainMenu_45Code.GDNewObjectObjects2= [];
gdjs.MainMenu_45Code.GDNewObject2Objects1= [];
gdjs.MainMenu_45Code.GDNewObject2Objects2= [];
gdjs.MainMenu_45Code.GDNewObject3Objects1= [];
gdjs.MainMenu_45Code.GDNewObject3Objects2= [];
gdjs.MainMenu_45Code.GDNewObject4Objects1= [];
gdjs.MainMenu_45Code.GDNewObject4Objects2= [];
gdjs.MainMenu_45Code.GDjudul1Objects1= [];
gdjs.MainMenu_45Code.GDjudul1Objects2= [];
gdjs.MainMenu_45Code.GDjudul2Objects1= [];
gdjs.MainMenu_45Code.GDjudul2Objects2= [];


gdjs.MainMenu_45Code.mapOfGDgdjs_9546MainMenu_959545Code_9546GDPlayBtObjects1Objects = Hashtable.newFrom({"PlayBt": gdjs.MainMenu_45Code.GDPlayBtObjects1});
gdjs.MainMenu_45Code.mapOfGDgdjs_9546MainMenu_959545Code_9546GDExitBtObjects1Objects = Hashtable.newFrom({"ExitBt": gdjs.MainMenu_45Code.GDExitBtObjects1});
gdjs.MainMenu_45Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayBt"), gdjs.MainMenu_45Code.GDPlayBtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenu_45Code.mapOfGDgdjs_9546MainMenu_959545Code_9546GDPlayBtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenu_45Code.GDPlayBtObjects1 */
{for(var i = 0, len = gdjs.MainMenu_45Code.GDPlayBtObjects1.length ;i < len;++i) {
    gdjs.MainMenu_45Code.GDPlayBtObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Prolog", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitBt"), gdjs.MainMenu_45Code.GDExitBtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenu_45Code.mapOfGDgdjs_9546MainMenu_959545Code_9546GDExitBtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenu_45Code.GDExitBtObjects1 */
{for(var i = 0, len = gdjs.MainMenu_45Code.GDExitBtObjects1.length ;i < len;++i) {
    gdjs.MainMenu_45Code.GDExitBtObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14297972);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "watery_cave_loop.ogg", true, -(10), 1);
}}

}


};

gdjs.MainMenu_45Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenu_45Code.GDPlayBtObjects1.length = 0;
gdjs.MainMenu_45Code.GDPlayBtObjects2.length = 0;
gdjs.MainMenu_45Code.GDExitBtObjects1.length = 0;
gdjs.MainMenu_45Code.GDExitBtObjects2.length = 0;
gdjs.MainMenu_45Code.GDPlayTxObjects1.length = 0;
gdjs.MainMenu_45Code.GDPlayTxObjects2.length = 0;
gdjs.MainMenu_45Code.GDExitTxObjects1.length = 0;
gdjs.MainMenu_45Code.GDExitTxObjects2.length = 0;
gdjs.MainMenu_45Code.GDbgObjects1.length = 0;
gdjs.MainMenu_45Code.GDbgObjects2.length = 0;
gdjs.MainMenu_45Code.GDNewObjectObjects1.length = 0;
gdjs.MainMenu_45Code.GDNewObjectObjects2.length = 0;
gdjs.MainMenu_45Code.GDNewObject2Objects1.length = 0;
gdjs.MainMenu_45Code.GDNewObject2Objects2.length = 0;
gdjs.MainMenu_45Code.GDNewObject3Objects1.length = 0;
gdjs.MainMenu_45Code.GDNewObject3Objects2.length = 0;
gdjs.MainMenu_45Code.GDNewObject4Objects1.length = 0;
gdjs.MainMenu_45Code.GDNewObject4Objects2.length = 0;
gdjs.MainMenu_45Code.GDjudul1Objects1.length = 0;
gdjs.MainMenu_45Code.GDjudul1Objects2.length = 0;
gdjs.MainMenu_45Code.GDjudul2Objects1.length = 0;
gdjs.MainMenu_45Code.GDjudul2Objects2.length = 0;

gdjs.MainMenu_45Code.eventsList0(runtimeScene);

return;

}

gdjs['MainMenu_45Code'] = gdjs.MainMenu_45Code;
