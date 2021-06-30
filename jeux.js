//fonction constructeur d'image
function Sprite(nomdufichier,left,top,idd){
    this._node=document.createElement('img');
    this._node.src=nomdufichier;
    this._node.classList.add(idd);
    this._node.style.position="absolute";
    document.body.appendChild(this._node);
 
    // geteur et seteur de la propriete left
    Object.defineProperty(this,"left",{
        get:function(){
            return this._left;
        },
        set: function(value){
            this._left=value;
            this._node.style.left=value+"px";
        }

    });
    Object.defineProperty(this,"idd",{
        get:function(){
            return this._idd;
        },
        set: function(value){
            this._idd=idd;
            this._node.classList.add=value;
        } 
    });
    // geteur et seteur de la propriete top
    Object.defineProperty(this,"top",{
        get:function(){
            return this._top;
        },
        set: function(value){
            this._top=value;
            this._node.style.top=value+"px";
        } 
    });
        // geteur et seteur de la propriete top
        Object.defineProperty(this,"display",{
            get:function(){
                return this._node.style.diplay;
            },
            set: function(value){ 
                this._node.style.diplay=value;
            } 
        });
        this.left=left;
        this.top= top;
    }
     
    // fonction permettant de creer un h1
    function Sprite_H1(classee){
        this._node=document.createElement('h1');
        document.body.appendChild(this._node);
        this._node.classList.add(classee);
        Object.defineProperty(this,"classee",{
            get:function(){
                return this._classee;
            },
            set: function(value){
                this._classee=classee;
                this._node.classList.add=value;
            } 
        });
    }
     
        Sprite.prototype.startAnimation=function(fct,interval){
            if(this._clock) window.clearInterval(this._clock);
            var _this=this;
            this._clock=window.setInterval(function(){
                fct( _this);
            },interval);
        }
        
        Sprite.prototype.stopAnimation= function (){
            window.clearInterval(this._clock)
        }

        Sprite.prototype.checkCollision= function (other){
            return ! ((this.top+this._node.height<other.top) || 
                this.top>(other.top+other._node.height)    ||
                (this.left+this._node.width<other.left)    ||
                this.left>(other.left+other._node.width) );
        }








