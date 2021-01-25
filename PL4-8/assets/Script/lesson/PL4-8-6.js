let {
    LogicBase,
    TouchUtil,
} = require('./lessons-framework/importer');

cc.Class({
    extends: LogicBase,
    properties: {
        question1:cc.Node,
        question2:cc.Node,
        awardNode:cc.Node,
        NextNode:cc.Node,
        _cur:0,
    },
    onLoad(){
        this._super();
    },

    
    start() {
    
        TouchUtil.addClickBtn(this.NextNode,()=>{
            this.question1.active=false;
            this.question2.active=true;
            return true;
        })
    },

    //魔法棒
    onContextMagicEnabledChanged(enabled){
        if(enabled){
            if(this._cur==0)
            {
                this.playAudioCustom(0);
                this._cur=1;
            }
            else if(this._cur==1)
            {
                this.playAudioCustom(0);
                this._cur=2;
            }
        }
        else 
        {
            if(this._cur==1)
            {
              
                this.NextNode.active=true;
            }
        }
    },

    //选对后
    onClickDragRight(compid, dragId, seatId)
    {
        this.awardNode.active=true; //显示获得
        this.setTimeout(()=>{
            this.playAudioCustom(2);//获得声音
        },10)
    },
    

});
