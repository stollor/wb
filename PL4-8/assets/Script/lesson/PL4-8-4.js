let {
    LogicBase,
    ActionUtil,
    TouchUtil
} = require('./lessons-framework/importer');

cc.Class({
    extends: LogicBase,
    properties: {
        mPlayButton:cc.Node,
        mNextButton:cc.Node,
        Node2:cc.Node,
        Node3:cc.Node,
        Button1:cc.Node,
        Button2:cc.Node,
    },
    onLoad() {
        this._super();
        
    },
    start() {    
        TouchUtil.addClickBtn(this.mPlayButton, () => {
            this.mPlayButton.active=false;
            this.Button1.active=true; 
            return true
        })
        TouchUtil.addClickBtn(this.mNextButton, () => {
            this.Node2.active=false;
            this.Button2.active=true; 
            return true
        })
    },

    onClickDragRight(compid, dragId, seatId)
    {
        this.setTimeout(()=>{
            this.playAudioCustom(dragId);
        },10)
        
        
    },
    

    onClickDragProgress(compid, progress)
    {
        if(progress==50)
        {
            this.setTimeout(()=>{
                this.Node2.active=true;
                this.playAudioCustom(9);
            },2500)
           
        }
        if(progress==80)
        {
            this.setTimeout(()=>{
                this.Node3.active=true;
                this.playAudioCustom(10);
            },2500)
            
        }

    },

    
    /**
     * 动画结束时
     */
    onDestroy() {
        this._super();
    },
});