// app.js or agent.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    console.log('===========configWillLoad5555===========');
  }
  configDidLoad() {
    // Config, plugin files have been loaded.
    console.log('===========configDidLoad4444===========');
  }
  async didLoad() {
    // All files have loaded, start plugin here.
    console.log('===========didLoad3333===========');
  }
  async willReady() {
    // All plugins have started, can do some thing before app ready
    console.log('===========willReady1111===========');
  }
  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    console.log('===========didReady2222===========');
  }
  async serverDidReady() {
    // Server is listening.
    console.log('===========serverDidReady6666===========');
  }
  /*启动项目之前执行 */
  async beforeStart(){
      console.log('项目启动中...');
  }
  async beforeClose() {
    // Do some thing before app close.
    console.log('===========configWillLoad=6666=项目启动中==============');
	
  }
}
module.exports = AppBootHook;