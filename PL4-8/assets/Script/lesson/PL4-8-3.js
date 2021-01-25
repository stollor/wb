let {
    LogicBase,
    ActionUtil,
    TouchUtil
} = require('./lessons-framework/importer');

cc.Class({
    extends: LogicBase,
    properties: {
        mPlayButton: cc.Node,
        mNextButton:cc.Node,
    },
    onLoad() {
        this._super();
        
    },
    start() {    
        TouchUtil.addClickBtn(this.mNextButton, () => {
            this.unscheduleAllCallbacks();
            this.stopAllAudio();

            this.resumeAnim(0);
            this.playAudioSubtitle(3);
            return true
        })
    },

    onAudioControllerCompleteSubtitle(index)
    {
        if(index==0)
        this.setTimeout(()=>{
            this.playAudioSubtitle(1);
        },10)
        
        if(index==1)
        this.setTimeout(()=>{
            this.playAudioSubtitle(2);
        },10)

        if(index==2)
        this.setTimeout(()=>{
            this.pauseAnim(0);
        },10)
        

        if(index==3)
        this.setTimeout(()=>{
            this.playAudioSubtitle(4);
        },10)
       
    },

    // onAnimControllerStart(compId, index){
    //     if(index == 0) {
    //         this.startClickAppear();
    //     }
    // },
    
    /**
     * 动画结束时
     */
    onDestroy() {
        this._super();
    },
});