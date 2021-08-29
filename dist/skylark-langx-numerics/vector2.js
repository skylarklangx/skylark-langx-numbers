/**
 * skylark-langx-numerics - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-klass","./numerics"],function(t,i){var s=t({klassName:"Vector2",set:function(t,i){return this.x=t,this.y=i,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,i){return void 0!==i?(console.warn("Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this},addScaledVector:function(t,i){return this.x+=t.x*i,this.y+=t.y*i,this},sub:function(t,i){return void 0!==i?(console.warn("Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){var i=this.x,s=this.y,n=t.elements;return this.x=n[0]*i+n[3]*s+n[6],this.y=n[1]*i+n[4]*s+n[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this},clampScalar:function(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this},clampLength:function(t,i){var s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var i=this.x-t.x,s=this.y-t.y;return i*i+s*s},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this},lerpVectors:function(t,i,s){return this.subVectors(i,t).multiplyScalar(s).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,i){return void 0===i&&(i=0),this.x=t[i],this.y=t[i+1],this},toArray:function(t,i){return void 0===t&&(t=[]),void 0===i&&(i=0),t[i]=this.x,t[i+1]=this.y,t},rotateAround:function(t,i){var s=Math.cos(i),n=Math.sin(i),h=this.x-t.x,r=this.y-t.y;return this.x=h*s-r*n+t.x,this.y=h*n+r*s+t.y,this},_construct:function(t,i){this.x=t||0,this.y=i||0}});return i.Vector2=s});
//# sourceMappingURL=sourcemaps/vector2.js.map
