let {
    LogicBase,
    TouchUtil,
} = require('./lessons-framework/importer');

cc.Class({
    extends: LogicBase,
    properties: {
        playBtns:cc.Node,
        playMusicButton:cc.Node,
        AniNode:cc.Node,
    },
    onLoad(){
        this._super();
    },

    onAudioControllerCompleteSubtitle(index){
        if(index==6)
        {
            this.AniNode.active=false;
        }
    },

    start() {
      
        for(let i = 0; i<this.playBtns.childrenCount; i++){
            TouchUtil.addClickBtn(this.playBtns.children[i],(event)=>{

                this.playArticle(0,i,false);
                this.playAudioSubtitle(i);
                
                return true;
            })
        }
       
        TouchUtil.addClickBtn(this.playMusicButton,()=>{
            this.AniNode.active=true;
            this.playAnim(0,1);
            this.playAudioSubtitle(6);
            return true;
        })
    },

});
