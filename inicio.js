(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkpHOQglgRgUgiQgOgZgCgdQgBgeALgdQAXg4A3ggQAigUAngFIAEAAIgsmEQgEgkAVgjQAVgiAigOIFxiSQANgEALgCQAjgDAaAVQAaAVAEAlIA/IrQAFAsgYArQgYArgtAZQgiAUgmAFQgtAFglgRQglgRgTgiQgPgZgBgdQgCgeAMgdQAVg4A5ghQAhgTAogFIADAAIgYjZIkkBrIAoFeQAHAugXAsQgYAsgvAbQgjAUgmAFIgTABQghAAgdgNgAjMDjQgdADgcAQQgrAZgRAqQgQArAUAiQANAYAbALQAaALAfgEQAegEAagPQAkgUASgiQASghgGggIgplwQgBgHAEgGQAEgGAGgDIFXh9IADgBQAFAAAEADQAEADAAAFIAjEwQgXgGgYADQgdADgbAQQgsAZgQAqQgRAqAUAjQANAYAbALQAaALAfgEQAegDAagQQAigUATgfQASgggEgfIg+osQgCgTgNgKQgNgLgRACIgOADIlwCSQgWAIgNAXQgOAWADAXIAxG1QgPgEgQAAIgPABg");
	this.shape.setTransform(37.0668,47.5068);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E84161").s().p("Aj8GwQgtgHgUgjQgUgiAQgrQARgqArgZQAagPAbgEQAbgEAXAHIgxm1QgDgXAOgWQANgXAWgIIFxiSQAVgIARAKQARAKADAXIA+IsQAEAfgSAgQgSAfgjAUQgrAZgtgGQgtgHgUgjQgUgjARgqQAQgqAsgZQAZgPAbgEQAbgEAYAHIgjkwQAAgGgFgDQgFgDgGACIlXB9QgGADgEAGQgEAGABAHIApFwQAGAggSAhQgSAhgkAVQgiAUgkAAIgSgBg");
	this.shape_1.setTransform(37.0634,47.5143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo44, new cjs.Rectangle(0,0,74.2,95), null);


(lib.Símbolo43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnPN5QiZggh7hBQiBhEhShgQhThggeh1QgNgxgDgtIhngzQhKgkgSg/QgUhDAyhPIAAgBIA5hTIAEgFQAZgfBrgCQAugBA4AFIANgUQhJgbgNgzQgZhfDDh4QCohoEXheQgGhlAuhSQAbguAoggQAogfAwgNQAbgHAdgBQBQgBBIAwQBGAwAoBRQBEgNAwgHQAGgBAFAEQAFADABAGQABAGgEAFQgEAFgGABQg9AKhNAPQghhShDgyQhDgxhMABQgWAAgbAHQhZAXgwBVQgwBUAOBoQkiBhitBqQixBtAUBKQAMAwBgAVQgbAhgXAiQg8gGg3ABQhiACgOAXIAAgBIg5BUQgnA/ALA1QAMA3BCAfIB3A7QACA1ANA1QA7DiD7CEQD0CAFUgGQDIgEDJg0QDig7DAhuQC5hqCAiLQB/iLAziWQA1iagmiRQgNgygZgyIBLhtQAqg8gQg2QgQgzhBgkIhbguIAAAAQgFgDgJAAQgbABg6AdQg0Abg5AoQgkgTgogQQBJhBgMgwQgMgrhQgWQhOgViEADIg3ACQgFAAgFgDQgEgEgBgGQgBgGAEgFQAEgFAHgBIA3gCQEvgFAcBvQAOA0gzA6IAWAKQCHhaA8gBQALgBALAEIAGACIBbAuIABABQBRAsAQBFQAPA/guBEIhCBeQAVAuAMAsQAnCXg0CeQg0CfiICUQiFCRjABtQjBBtjiA8QjQA2jIADIgiAAQiYAAiJgdg");
	this.shape.setTransform(128.0952,91.79);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhegPQAbglAqgLQAMgDAQgBQAjgBAhATQAhATAWAgQg6ANg1AOQhMAUhAAUQAEgxAbgjgAADglQgKAAgKADQgXAFgRAQQgRAPgKAYIBcgaIA9gOQgfgYghAAIgCABg");
	this.shape_1.setTransform(113.725,23.1494);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39509E").s().p("AtYDfQNhhbNQlkQmDDlm2B0QmJBomKAAQgzAAgygCg");
	this.shape_2.setTransform(126.6,69.5602);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#818BC4").s().p("AjSgnQAwhiBhgaQBggZBaA+QBZA+AfBxIhkAaQgVg7gygeQgxggg0AOQg0AOgcAyQgcAzALA+IhlAaQgchyAvhgg");
	this.shape_3.setTransform(114.3406,20.0408);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4257E8").s().p("AuaDxQgXhaD9iHQD+iFF+hjQF+hkEfgHQEfgHAXBaQAXBbj9CGQj+CFl+BkQl+BjkeAHIgpAAQj4AAgWhTg");
	this.shape_4.setTransform(120.946,47.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FD3E76").s().p("AkEMCQjVgCizg7Qi0g6h1hqQh6hugmiRQgOg1gBg1QgEhmAmhnIAPgnQAag7Aog9QB2iyDUiLQDciQEShIQEQhHEGATQD+ARC+BiQBCAjAyAmIAgAaQBUBJAuBaQAaAyAMAyQAmCRg0CaQgzCWiACLQiACLi5BqQi/BujiA7QjYA4jUAAIgSAAg");
	this.shape_5.setTransform(135.5079,103.5889);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39509E").s().p("AhSAJQgsgmAPgZIABgCQAMgTBHgFQA/gEBQAJQgoA8gaA7IgHASIgBACIgHASQhMglgpgkg");
	this.shape_6.setTransform(22.8859,93.136);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#39509E").s().p("AAVBVIgBgBIgQgMQgwgmhDgiQBCgvA5gbQBAgfAUALIACABQAZAPgTA4QgSAxgyBHg");
	this.shape_7.setTransform(225.9975,38.5792);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E84161").s().p("Ah1APQAxhGASgyQAUg4gagOIgCgBIABgBIBZAuQBCAkAPA0QARA0gqA8IhMBtQgthahUhJg");
	this.shape_8.setTransform(241.4077,46.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E84161").s().p("AgkByQhBgfgMg3QgMg0Aog/IA4hVIABABIgCACQgPAZAtAnQAnAjBOAmQgmBnAEBmg");
	this.shape_9.setTransform(14.7203,104.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo43, new cjs.Rectangle(0,0,256.2,183.6), null);


(lib.Símbolo42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiqG1IhhgMQgIgBgGgEIgEAAQgMgBgIgHQgJgHgDgLQgchVgMhUQgViVAphMQAuhUEJivQD5ilBHgNIACAAQAPgCAMAIQANAKACAPQALA8AJBRQAOCFgNA4QgDANgCAUQgGA5giA0QgwBIiVCZQgbAmgrAjQhJA9hQALQgSADgRAAQgPAAgOgCgAhmChQhkB/g9BjIBiAMQAdADAZgDQBLgLBFg+QAjgfAUgdQCsiwAlhFQAOgZAEgbQADggAEgVQAMg1gPiIIgSh+Qg9ALjzCgQkDCrgqBMQglBDAYCRQAMBOAYBJQA3hbBuiNIA5hHIAYjDQABgGAHgBQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAEAAACADQACADgBAEIgUCmQBkh3B2iBQADgDADAAQAEgBADADQADADAAAEQAAAEgCACQh8CIhnB6QA7ADAygHQA4gHATgUIAFgDQAEAAAEADQACACAAAEQAAAEgCADQgXAXg/AJQg+AJg/gGIg4BFg");
	this.shape.setTransform(36.525,43.8447);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F8FCC").s().p("AilGPIhigNQA9hiBkiAIA4hEQAzADAwgDQBUgHAcgdQACgCAAgEQAAgEgCgDQgHgGgGAGQgVAVg/AIQgvAFg1gDQBnh6B8iHQACgDAAgEQAAgEgDgCQgCgDgEAAQgEABgDACQh2CBhkB4IAUinQABgDgCgDQgCgDgEgBQgEAAgDACQgDACgBAEIgYDDIg5BGQhtCMg4BdQgYhIgMhQQgXiQAkhEQAqhMEDiqQDzihA9gLIASB+QAPCJgMA1IgIA0QgEAbgOAaQglBFirCwQgaAmgtAjQhNA+hQAAQgMAAgNgCg");
	this.shape_1.setTransform(36.5423,43.8552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo42, new cjs.Rectangle(0,0,73.1,87.7), null);


(lib.Símbolo40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B9C9").s().p("Ah5E+QghgNgPggQgSghAFgrQADgrAaguQAYgtAsgpQAFgDAFAAQAFAAAEAEQAEAEAAAGQAAAGgFADQhKBGgNBMQA+ArBMAFQBMAFBCgkQA6gfAmg4QAlg4AHg+QAIg+gWg7QgBgGACgFQADgFAFgCQAFgBAFACQAEACADAFQAZBGgLBGQgKBHgpA6QgnA5g/AiQhGAlhOgCQhPgChEgrQABAXAKASQALAYAYAKQAYAKAfgGQAEgCAFADQAFADABAGQADAKgKAFIgBABIgCAAQgOADgOAAQgXAAgUgJgAjwCLIgUgfQgnhJAFhPQAEhQAqhBQAphBBEglQA1gcA/gGQA9gEA6AUQAGABACAFQACAFgCAFQgBAEgFAEQgFADgGgCQg1gSg3AFQg3ADgyAbQhDAjglA/QgkBAgCBFQgBBFAhA+IARAdQAEAEgBAFQgBAGgFADIgBABQgEACgDAAQgGAAgEgGgAgMgHIg2gmQgHgFgBgHQgBgIAFgGIAUgYQAHgIAMABIABAAIApAKIAXgYIhPgaQgIgEgDgJQgDgIAGgHIABAAIAhgiQAHgGAIgBIBAAMQAGABADAEQADAGgBAFQgBAFgFADQgGAEgEgCIg5gKIgUATIBVAdQAHACABAHQACAGgFAHIgrAuQgEAFgIgBIgtgLIgLAMIAuAhQALAHAMgEQAMgDAKgJICTikQAHgHgBgLQAAgHgEgEQgDgCgEgCQgEgBgGACQgHAEgHAIIgVAXQgEAEgFAAQgHAAgDgEQgFgEAAgGQAAgFAEgEIAVgXQARgTATgCQASgDAPAPQANAKAAATQACAJgEAKQgEAJgHAIIiTClIgBABQgHAHgLAHQgQAHgOAAQgRAAgOgJg");
	this.shape.setTransform(77.407,78.3825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtK0QgggHgTgaIrduiQgVgbAEgiQAEghAbgVIF/kuQAIgGALABQALACAGAJQAGAIgCAKQgBAKgIAGIl/EtQgKAJgCAMQgBANAIALILcOiQAJAMAOADQAOADAMgHIAGgEII4m/QAsgiAGg3QAHg3gigrImEnsQgGgIABgKQABgLAJgGQAIgHAKACQAKABAHAIIF/HoQAxA8gGBHQgDAngSAiQgSAhgfAYIo4G/QgGAGgIAEQgTAKgWAAQgJAAgKgCg");
	this.shape_1.setTransform(75.7254,82.2615);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAIIgDgEIACgBIAngNIAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgGAHIgYAJIgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_2.setTransform(94.945,115.4114);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAHIgDgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAggJIgIALIgPAGIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_3.setTransform(94.2083,117.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACgFIADgBIABAAIgBADIgFAIIgFACg");
	this.shape_4.setTransform(97.475,116.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOARIAWgjIABgFIACADQAEAGgBABIgWAkg");
	this.shape_5.setTransform(97.31,118);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAaIABgCIABgCIABgBIAZgpIACgFIACAEQAEAEgBABIgBABIAAACIgVAiIgBABIgLAEg");
	this.shape_6.setTransform(95.9111,116.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhfA0IAIgGIAPAUIARgOIACAIIgWASgAg3AVIAHgFQAAgBABAAQAAAAAAAAQABgBAAABQABAAAAAAIAfAOIgHAGIgGgDIgOALIABAHIgIAGgAgrAlIAJgIIgNgGgAgSABIgNAJIgEgFIAggYIADAFIgLAKIAPATIgHAFgAAHgdIAHgFQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAfAPIgIAGIgGgDIgOALIABAGIgHAGgAATgNIAKgHIgNgHgAAmg1IAJgHQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABIAPAJIgHgTIAHgFIAAAAQADgEADAEIAYASIgHAFIgVgQIAGAUIgHAFQAAABgBAAQAAAAgBABQAAAAgBgBQAAAAgBAAIgPgKIALAYIgHAFg");
	this.shape_7.setTransform(108.325,107.8625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXA2IACgCIACAAIATAJIgCACIgFgCIgKAHIACAGIgDACgAhRBBIAHgGIgKgEgAhBAlIACgCIANAQIgDACgAgzAZIAJgHQAHgGAEAFQADAEgCAFIAIACIgDADIgHgDIgCACQgDADgDAAIAFAGIgDACgAgoAUIgGAFIAEAGIAGgDIAAAAQAHgFgEgEIgCgBIgFACgAgYAEIADgCIALAOIAJgIIABADIgLAJgAgDgMIACgCIAMAPIgDACgAALgXIABgCIACAAIAVADIgKgMIACgCIAMAQIgBABIgCAAIgVgDIALANIgDACgAAnguIANgKIABACIgKAIIAEAEIAJgHIACACIgJAIIAEAEIAKgIIACADIgNAKgABKg1IAHgDQAFgEgCgCQgCgCgEACIgCABQgHAEgCgEQgEgEAHgGIAHgEIABADIgGADQgFAEACACQABABAFgCIABgBQAIgDACADQAEAGgIAFQgCACgFACg");
	this.shape_8.setTransform(111.5557,111.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAbIAHgCIAHgFQAEgCABgEIACgEQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQgCAAgEABIgFAEQgIACgGgBQgGAAgEgGQgEgEgBgGQAAgGAEgGQADgHAHgGIAKgFIAGgEIAEANIgGADIgGAFQgFADgBADQgBAEACACIADACIAFgBIAFgBQAIgFAHACQAGAAAEAFQAEAFABAFQABAHgDAHQgEAGgIAHQgFAEgFACQgFACgDAAg");
	this.shape_9.setTransform(41.7583,47.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgggeIAIgHQADgCADAAQAEAAACADIAtAoIgNALIgLgLIgNALIAEAPIgMALgAgIACIAJgGIgRgRg");
	this.shape_10.setTransform(37.925,51.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E84061").s().p("AA7LfQgQgBgKgNIrdujQgIgKACgNQABgNALgIII+nEQArgiA3AGQA2AHAiArIJkMJQAjArgHA3QgGA3gsAiIo4G/QgKAJgNAAIgGgBg");
	this.shape_11.setTransform(76.0147,73.5645);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjkCLIAQgOQAHgFAGgBQAGgCAGADQAGACAEAEQAFAIABAHQABAHgDAIQgEAGgGAFIgDACIgCABIAKAQIgMAJgAjGCFQgDABgDACIgFAEIANATIACgBIACgBQAFgFAAgEQABgFgEgFIgDgEIgEgBIgBAAgAhNARIAIgGQAEgDADAAQADABACADIAvApIgNAKIgLgLIgOALIAFAQIgNAKgAg0AzIAJgHIgRgRgAgogLIARgMQAGgGAGgBQAHgBAEACQAGABAEAGQAGAHAAAHQABAHgDAGQgDAHgHAFIgCACIgCACIAJAPIgLAJgAgKgPQgDAAgDACIgEADIANATIABgCIADgBQAEgDAAgEQABgGgDgEIgEgDIgEgCIgBABgAAogHQgHgEgGgIIgHgKQgDgGAAgHQAAgHADgGQACgGAHgFQAHgHAHAAQAIgBAGADQAHAEAFAHQAFAFADAIQAEAGAAAHQABAHgDAGQgCAHgHAEQgHAHgIAAIgBAAQgHAAgHgEgAAlg3QgDADgBAFQgBAEACAEIAFALIAIAHQAEADAEgBQAEAAADgCQADgDABgFQABgEgCgGIgHgKQgFgGgFgCIgCgBQgFAAgEADgAA/hdIAQgMQAHgGAGgBQAGgBAGACQAFABAEAFQAFAGABAGQABAHgCAGIAYAMIgNAKIgTgJIgBABIgCABIgCACIgDABIALARIgMAJgABdhiQgDABgDACIgFADIANATIABgBIACgBQAFgEABgFQABgFgEgEIgDgEIgDgBIgCAAgACBh/IgQAJIgGgKIAogfIAGALIgMAMIAdAtIgMAKgACbilIAkgdIAIALIgZAUIAHAJIAWgRIAIAMIgWARIAIANIAYgUIAIAMIglAdg");
	this.shape_12.setTransform(51.825,39.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo40, new cjs.Rectangle(0,0,151.5,151.7), null);


(lib.Símbolo38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlKI6QgIgDgDgHQgEgIADgHQADgIAHgDQAHgEAHADQCJApB4gTQCdgYB2h9QA1g2AZhhQAzjBiKjYQgTghgHg2QgOhqA9hjQgwgEgsARQAPgogHgmQgjAEghAdQAMgkgaguQgSAigrAhQhaBCiEgJQgQgEgcgDQgHgBgFgGQgFgFAAgHQAAgJAHgGQAGgFAJABQAaADATAEQBwAGBMg0QAmgbARgfQALgVAXAAQAHAAAGACQANAFAIANQALAVAFAPQANgEAPgCQAHgBAJADQAWAHAEAWQAEARgBARQAVgCAYACIAJABIACABQAPAFAHAOQAHAOgFAPQgCAGgDAEQgyBTAIBYQAFAwARAfQA+BhAaBhQAiCAgfB1QgRBCgkA5IgiAsQh/CHioAbQgpAGgqAAQhdAAhlgeg");
	this.shape.setTransform(82.5519,59.9983);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABqEaQiviXgyi5QgehyAVhnQABgIAHgEQAIgFAIACQAHADAEAGQAEAGgCAIQgSBeAcBqQAvCtClCPQAFAFABAHQACAHgEAGQgFAHgJACIgCAAQgHAAgGgFg");
	this.shape_1.setTransform(13.7794,75.4019);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#907CB7").s().p("AgXi6QBqhHB1gJQjNA4hyD0Qg4B6gQBvQgvk3DXiOg");
	this.shape_2.setTransform(52.4202,61.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#907CB7").s().p("AiFDxQBWgwBDg7QDXi7g8jfIAWBFQATBTgOBOQguD0lrBQg");
	this.shape_3.setTransform(66.2842,69.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#907CB7").s().p("AAQjnQBEgdBQAFQAoACAaAJQjngIiID9QgsBQgcBgQgOAwgFAgQAbmMDZhcg");
	this.shape_4.setTransform(37.9,50.2382);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#907CB7").s().p("AhxEFQBJg6A3hDQCwjXhEjiQA7BigHB/QgQD6lOCIg");
	this.shape_5.setTransform(83.8673,80.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#724090").s().p("AgWIjQhZgThYgsIhGgnQjgiqgrjbQgNhDAGhBIAJgzQBAkDD6gzQB9gaBwAbQCEAJBZhCQAtghASgiQAZAvgLAjQAhgdAjgEQAHAmgPAoQArgRAxAEQg9BjAOBqQAHA2ATAhQCJDYgyDBQgZBhg1A2QiTCcjLgBQg9AAhCgOg");
	this.shape_6.setTransform(58.5476,59.9989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo38, new cjs.Rectangle(0,0,117,120), null);


(lib.Símbolo37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AokEQQhmgUg9g+QgpgqgHgzQgIgzAagxQBAh6DTgJQBIgDBTALQBGAJA7APQAoALAogJIF0hXQAIgCAGAEQAHAEABAIQACAHgEAHQgEAGgIABIl0BXQgwAMgygOQiKgkiHAGQi9AIg3BmQgWAqAIAoQAHAlAfAgQA0A1BaASQBdAUBTgeQBFgYAugvQAagbAng1QAngsA8gLILriLQAXgEAUgUQAUgTAEgYIgDgNQgDgPgLgLQgJgKgNgEQgOgEgNAEIh7AcQgHACgHgEQgGgFgCgHQgBgHAEgHQAEgGAHgCIB6gcQAbgGAZAJQAaAKAQAXQAKAPAEATIADAMIAAAMQgFAjgcAdQgbAcgkAGIrsCLQgvAKgeAhIgZAeQgiAugbAYQguAng/AXQg5AUg9AAQglAAgngIg");
	this.shape.setTransform(76.2406,27.978);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D4594").s().p("AiiBDQg9gXgBgkQgCgjA7gcQA7gbBUgEQBUgDBOARQBPARAIAXQAJAbhUArQhXAuhPADIgWAAQhHAAg1gUg");
	this.shape_1.setTransform(34.4419,29.4689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E8ECB").s().p("An8DxQhHgHg5ghQg6ghgVgwQgXg0Adg3QA3hmC+gIQCGgGCKAkQAxAOAxgMILyiwQAVgFATAMQASAMAFAWIADANQgEAYgUATQgUAUgXAEIrrCLQg8ALgnAsQgnA1gaAbQguAvhFAYQgxASg2AAQgTAAgTgCg");
	this.shape_2.setTransform(76.2085,27.9531);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo37, new cjs.Rectangle(0,0,152.5,56), null);


(lib.Símbolo36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUS7IgFgDIrWoXIAAAAQg1gpgHgxQgGglAVgpIJJy8QAPjBgUjMQgDgTAOgNQBthyCyA1IAHADQASAKADAUIAVCMIAAABQACAPAKAQQAHAKANAPIAHAHQAgAjANAxIDJArQAFAAAGADIG8EDQAHAEACAIQADAIgEAHQgEAIgJACQgIADgIgFIm6kBIjhgwIgJgdQgLglgYgaIgbghQgSgZgEgbIgUiMQiZguhdBgQAWDTgRDJIpNTEQgSAjAKAfQAJAaAgAZILWIWIABgCIHviVIGYsIQAEgHAIgDQAIgCAHAEQAIAEACAIQADAIgEAHImYMIQgIAOgRAGInkCSQgHAEgHABIgJABQgKAAgJgEg");
	this.shape.setTransform(87.7149,121.493);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223368").s().p("AgfAVIgBAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAABAAQAAAAABAAQAfAEAPgLQAKgHACgRQAAgBAAgBQAAgBABAAQAAAAABgBQABAAAAAAQAEAAgBAEQgBATgNAKQgLAKgWAAIgSgBg");
	this.shape_1.setTransform(101.505,90.7829);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223368").s().p("AgkAiIgBAAQgDgCADgDQAPgUAVgRQATgSARgIQADgBACADQABADgDACQgQAHgUARQgTARgPATQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgBgBg");
	this.shape_2.setTransform(117.5433,96.415);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223368").s().p("AggAWQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAgBQAKgSAVgPQAEgDAJgCQAMgCAHAEQAGAFAAAHQABADgEABQgDAAgBgEQAAgDgDgDQgFgDgJACQgHABgEADQgSAMgJASQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCgBg");
	this.shape_3.setTransform(105.6225,137.2056);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223368").s().p("AgjAdQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAQAHgPAGgIQAIgKAMgKQAFgFAKgDQANgEAGAEQAFAEACAJQAAABAAABQgBAAAAABQAAAAgBAAQgBABgBAAQgDABgBgEQAAgGgDgCQgDgCgKADQgJADgEADQgLAKgIAJQgFAHgHAPIgCABIgCAAIgBAAg");
	this.shape_4.setTransform(98.5636,135.9434);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223368").s().p("AggAdIAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBIALgUQAHgHAMgMQAAgCAMgHQAOgHAHAFQAGAEAAAIQABAEgEAAQgDAAgBgDQAAgGgDgCQgDgCgJAFQgIADgFAFQgLAKgGAIIgKATQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_5.setTransform(95.6957,128.0864);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223368").s().p("AgeAYQgDgBABgEQAKgTASgMQAVgQAKAHQAFADABAJQABAEgEAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAgFgDgDQgGgEgRANQgQAKgKAUQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgBgBg");
	this.shape_6.setTransform(112.4225,137.6935);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223368").s().p("AhZBeIgBgBQgBAAAAgBQgBgBAAAAQAAgBABgBQAAAAABgBQBZhfBYhVQACgDADADQACADgDACQhaBXhWBdIgDABIgBAAg");
	this.shape_7.setTransform(102.7319,123.1321);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#223368").s().p("AhRBeIAAgBQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBABAAQA3hQBphlQAAgBABAAQABAAAAAAQABAAABAAQAAAAABABQACADgDACQhmBjg4BRQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_8.setTransform(108.1544,128.09);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223368").s().p("AhMBSIgBgBQgBAAAAgBQgBgBAAAAQAAgBAAAAQABgBAAAAQAXgmAtgrQAfggA1gsQABAAAAgBQABAAABAAQAAAAABABQAAAAABABQACACgCADQhxBegmA8QAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgBAAg");
	this.shape_9.setTransform(115.6475,130.0448);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E95488").s().p("AkWFPQgbgFAJgiQgpArgYgUQgZgUAbg2QgYgCgEgRQgFgWAggpIDkkWQhdAKgxgNQg2gOAEgpQCegfCbg0QAigLAkAEIArAEQAfAAAYgNIB+g/QB/BkgaCDQibBWiABjQiABjh/CDQggAcgRgFQgOgFABgaQgeAhgZAAIgHgBg");
	this.shape_10.setTransform(129.8124,107.4548);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#223368").s().p("AAJAnIgBgBQgXgaACgVQABgPAOgNQADgCACACQACADgCACQgMALgBANQgCARAWAYQACADgDACIgCABIgCAAg");
	this.shape_11.setTransform(106.19,61.6877);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#223368").s().p("AgGAzIAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAHgXACgaQADgagDgRQAAgDADgBQABAAAAAAQABAAABABQAAAAAAABQABAAAAABQADASgDAbQgDAagGAYQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_12.setTransform(93.1693,51.7611);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#263678").s().p("AABAlIgBAAQgCgCACgDQAJgRAAgWQAAgFgDgIQgEgIgEgBQgEgCgDACQgDACgCgDQgBgDACgCQAGgEAHADQAHADAFALQAEAIAAAHQAAAXgLAUQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgBg");
	this.shape_13.setTransform(66.5357,85.1519);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#223368").s().p("AgFAsIAAgBQgBAAgBAAQgBgBAAAAQAAgBAAAAQAAgBABgBQAHgOADgJQAEgMABgOQAAgGgCgJQgDgJgEgCQgCgBgGADQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgDADgCQAIgFAFACQAIAEAEAMQACAJAAAIQgBAQgEANQgEAJgHAOQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_14.setTransform(71.8969,90.2085);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#223368").s().p("AgHAqQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBIAIgTQAEgKACgPQABgHgCgIQgBgKgEgCQgCgBgFADQgDACgCgDQgBgEADgBQAHgFAGACQANAFgDAeQgCAQgEAKIgJAUQgBABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_15.setTransform(79.986,88.0423);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#263678").s().p("AgBAlQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBQAJgTAAgSQAAgXgHgDQgCgBgFADQgDACgCgDQAAgBgBgBQAAAAAAgBQABgBAAAAQABAAABgBQAIgEAEACQAMAEAAAcQAAAUgLAUQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBgBg");
	this.shape_16.setTransform(62.2386,79.8342);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#223368").s().p("AgXCAIgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAah2AUiCQABgDADAAQAEABgBADQgWCHgYByQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_17.setTransform(79.6707,79.2361);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#223368").s().p("AgdB5IAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAhhaAXiPQAAgDAEAAQADABAAADQgXCOghBdQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_18.setTransform(72.5107,77.6125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#263678").s().p("AgVBuIAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAdhDALiRQABgDADAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQgMCTgcBDQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape_19.setTransform(66.625,72.6094);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E95488").s().p("AiGHLQgegIALg7QgWAbgTgTQgVgUALgxQgVAPgMgJQgOgKAFgrQAiizAIihQAIiigSixQBdhgCZAvIAUCLQAEAbASAaIAbAhQAYAaALAlQAvCdBBCRQggAagqgjQgnghgthSIhhFbQgPAxgVAJQgRAHgPgTQgZAtgaAAIgIgBg");
	this.shape_20.setTransform(85.1092,50.1251);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D4594").s().p("AhdDIQhCgjgThSQgThTAnhSQAnhSBKgjQBJgiBCAiQBCAjATBTQATBRgnBTQgnBThKAiQglARgiAAQgjAAghgRg");
	this.shape_21.setTransform(66.575,157.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A4ADD8").s().p("ArhH2QghgZgJgaQgKgfASgjIKu2MINlIHIscYQg");
	this.shape_22.setTransform(82.4349,135.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E81BD").s().p("ADhDqIthoEIHkBlIMdHQg");
	this.shape_23.setTransform(137.85,60.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#39509E").s().p("AC7sIIGiAyIrIVJInxCVg");
	this.shape_24.setTransform(141.575,161.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo36, new cjs.Rectangle(0,0,202.1,243), null);


(lib.Símbolo27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AOwpyIiOiHQgogmg4AAQg3ABgmAnIh+CBQgXglgogTInuj0Al8MpIBZBVQAoAmA3gBQA3AAAmgnINntxQAHgIACgJQADgLgEgKQgIgVAQgRQAQgQAWAHQALADAKgDQALgCAHgIIB9iAAn0sZIndOeQgGALAAAHIgCAFQAAAMAIAJQAGAHARALQCFBOEDCeIgCACQgbAcgHAn");
	this.shape.setTransform(98.5735,105.0753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4263E7").s().p("AocMpIkCj1QgogmgCg2QgCg3AmgnINTtoQAIgIAKgCQALgDAKAEQAWAHAQgRQARgQgJgWQgDgKACgKQACgLAHgHIDVjaQAmgnA3AAQA3gBAoAmIECD2QAoAmACA2QACA3gmAmIjUDaQgRARgWgIQgWgGgQAQQgRARAIAVQAIAWgQARItSNoQgmAng3AAIgCAAQg2AAgogmgAA/nfItSNpQggAgABAtQACAuAhAfIEDD2QAhAgAugBQAuAAAfghINTtoQAHgHgDgJQgNgiAZgaQAagaAjALQAKACAGgGIDVjaQAfgggBgtQgBgugiggIkCj1QgiggguABQguAAgfAgIjVDaQgGAHADAJQANAjgaAaQgZAagkgLIgGgBQgFAAgFAEg");
	this.shape_1.setTransform(124.2479,111.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7B1E9").s().p("AguCdIg/gQQgOgEAGgMIAKgXQADgHAJgCIA2gIIAXg1IhiACQgEAAgFgEQgCgEACgFIAAAAIARgfQADgFAHgDIBPgXQADgCADACQACACABACQABADgBADQgBACgDABIhPAYIgCABIgMAXIBkgCIADABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABADAAAEIgeBCQgBAEgEAAIg7AKIgJAUIA8AQQAQAEAPgHQANgIAIgSIAehCQACgDAFgBQAEAAACAEIAkBEIAOgZQACgDgBgCIgehrIAAgFIAjhPQAGgNgCgKQgCgKgKgFIgGgCQgFgBgEACQgFACgFAGQgGAGgGANIgaA6IgEAEIgGAAQgDgBgBgDQAAgDABgDIAag6QAWgwAiAPQAMAGAEAIQAGAJgBALQAAAKgGANIgiBNIAeBpQADAFgFALIgUAgQgDAGgFgBQgFAAgDgGIghg+IgYA1QgKAWgSAJQgLAGgNAAQgIAAgIgCg");
	this.shape_2.setTransform(75.1255,158.0708);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDD1F1").s().p("AgbA4IgcgaQgBgCABgDIBOhQQADgCACACIAbAaQADACgDADIhNBQIgDABIgCgBg");
	this.shape_3.setTransform(192.3375,68.2375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CDD1F1").s().p("AgbA4IgbgaQgDgDADgCIBNhPQADgDACACIAbAaQADACgDADIhOBPIgCACIgCgBg");
	this.shape_4.setTransform(180.9,79.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CDD1F1").s().p("AhrCKIgbgaQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABgBIDuj0QABAAAAAAQABgBAAAAQABAAABABQAAAAABAAIAbAaQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABIjvD0IgCABIgCgBg");
	this.shape_5.setTransform(140.75,114.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CDD1F1").s().p("AgbA3IgbgZQgEgCAEgDIBNhQQADgCADACIAaAaQADACgDADIhOBPIgCACIgCgCg");
	this.shape_6.setTransform(139.05,97.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CDD1F1").s().p("AhVByIgbgaQgCgCACgDIDBjEQACgDADADIAbAZQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABIjADFIgDABIgDgBg");
	this.shape_7.setTransform(123.65,94.0125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CDD1F1").s().p("AhNBqIgbgZQgCgCACgDICxi1QADgCACACIAbAZQACADgCACIixC1IgDABIgCgBg");
	this.shape_8.setTransform(115.6306,140.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CDD1F1").s().p("AihDAIgbgZQgCgDACgCIFZlhQADgCACACIAbAZQACADgCACIlZFhIgDABIgCgBg");
	this.shape_9.setTransform(114.325,122.7194);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CDD1F1").s().p("AhsCJIgbgZQgCgCACgDIDvjzQAAgBABAAQAAgBABAAQABAAAAABQABAAAAABIAbAZQADACgDADIjtDzIgDACIgDgCg");
	this.shape_10.setTransform(99.3,118.9875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CDD1F1").s().p("AhUByIgbgaQgBAAAAgBQgBgBAAAAQAAgBABAAQAAgBABgBIDAjEQACgDADADIAbAZQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABIjADFIgDACIgCgCg");
	this.shape_11.setTransform(180.1375,67.9875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CDD1F1").s().p("AgUCwIiciVQgDgCADgDIDAjEQACgDADACICcCVQADADgDACIjADFIgCABIgDgBg");
	this.shape_12.setTransform(167.225,55.6931);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4263E7").s().p("AABAUIgVgUQgEgDAAgGQgBgGAFgEQAEgFAGAAQAGAAAEAFIAVATQAEAEAAAGQAAAGgEAEQgEAFgGAAQgGAAgEgFg");
	this.shape_13.setTransform(142.7225,67);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4263E7").s().p("AABAVIgVgVQgEgDAAgGQAAgGAEgFQAEgDAGAAQAGAAAEADIAVAUQAEAEAAAGQAAAGgDAEQgFAFgFgBQgHAAgEgDg");
	this.shape_14.setTransform(168.8,91.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4263E7").s().p("AAMAfIgrgoQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEIArAoQAEAEAAAGQAAAGgEAFQgEAEgGAAQgGAAgEgEg");
	this.shape_15.setTransform(160.475,83.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4263E7").s().p("AAMAfIgrgoQgEgEAAgGQgBgGAFgFQAEgEAGAAQAGAAAEAEIArAoQAEAEAAAGQAAAGgEAFQgEAEgGAAQgGAAgEgEg");
	this.shape_16.setTransform(151.0725,74.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AnzM7QgpgRgmgtIiwiqQg9g0gJg5QgCgSABgXIACgdQgCgUEnkrQCrisGambIAlgFQAdgIAKgRIAFg1ICoioIBchYQAegcBRAtQBJApBUBSQBUBQAvBKQAzBRgWAhIkCEAIhHALIgJBIItfN1QgjAegnAAQgWAAgWgKg");
	this.shape_17.setTransform(125.1407,111.6572);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#374FA2").s().p("AhcDKIgLgFQhQgqgchWQgchVAohRQAohRBWgfQBUgeBSAmIALAFQBQAqAcBWQAcBVgoBSQgoBRhWAeQgmANgkAAQguAAgugVgAAHCwQgWASgUAGQBFANBAgjIg8geQgPAQgQAMgAhQC6QAhAIArghQANgLAKgLIg9gegAh7BmQAAA2AaAVIAmhNIg+gfQgCAQAAARgAAzCFIBDAhQAmgcAWgnIhOgnQgVApgcAggAiICWQgHgVAAgbQAAgQADgaIg8gdQAKBHA2AwIAAAAgAghBbIBCAhQAcgfAVgqIhOgmgAh2AxIBDAiIAnhPIhOglQgUAqgIAogABsArIBOAmQATgrgCgtIhCggQgIAlgVAtgAjKAIIBCAgQAIgmAVgsIhOgmQgTApACAvgAANgDIBOAlQATgnAJgrIhEgigAhRgyIBOAmIAlhOIhCghQgdAhgUAogADJgeQgLhGg1gwQAGATABAcQAAAQgDAaIA8AdIAAAAgAixhhIBOAmQAXgsAagdIhDghQgmAbgWApgAA8hjIA+AfQACgQAAgRQAAg2gagVgAAFigQgHAGgRAQIA+AfIAlhNQgGgCgHAAQgcAAgiAagAhhixIA8AeQAPgQAQgMQATgQAWgIQgSgDgRAAQgyAAgvAZg");
	this.shape_18.setTransform(77.775,83.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EEEDF9").s().p("ADZCVInSjkQgJgEgDgJQgDgJAEgIIAOgcQAEgIAJgDQAJgEAIAFIHSDjQAJAEADAKQADAIgEAIIgOAcQgEAJgJADIgHABQgFAAgFgCg");
	this.shape_19.setTransform(96.775,43.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4263E7").s().p("AlVJNIJzy8IAGACIAbANIADACIAUALIp4TDg");
	this.shape_20.setTransform(34.975,62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FD3E76").s().p("AgCMDIprk0Ihsg6IKUysILKFiQA5AbAUA9QAUA7geA3In4PFQgbAxhCALQgPACgPAAQgtAAgqgVg");
	this.shape_21.setTransform(76.125,81.9703);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D34CE").s().p("Ak8JVQgCgHAHgOIJbyUQAHgNASADIpvS+QgJgFgBgGg");
	this.shape_22.setTransform(31.9118,60.789);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EEEDF9").s().p("AFIEEIgNgGIl4jaQjOh4iihlIgChOINfGXIg2BcQgOAWgMAFIgGABQgHAAgLgEg");
	this.shape_23.setTransform(46.45,140.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#374FA2").s().p("AEpEtQh+hJjxiVQj3iWh5hHQgRgKgHgIQgIgJABgMQAFgQAHgOIAHgKQACgHAJgMQAIgLACgHQAOgeAbgNQAbgNAaAOIL3FJQAdAQAKAbQAMAdgIAfIg/B2QgOAgghARQgSAJgQAAQgOAAgMgHg");
	this.shape_24.setTransform(47.0085,138.8452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo27, new cjs.Rectangle(-1,0,209.4,199.2), null);


(lib.Símbolo26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD5G1Qhagjg8hAQgPgQgOgTIgQgXQgggzgPg/QgLgvgFg/IgFhNIAAgDQgDgfgFgIIAAAAQgIAHgMAbIghBJQgeBBgfArQgqA8g5AlQgSAMgVAKQhOAohhACQhgAChbgjQh7gwhLh4IgDgEQgPgZgMgkQgGgTgJglQgQhEgChCIADhNQAAgFgDgFIgGgHQgOgJgIgNQgSgcAJgrIAOhGQAFgaAUgTQAWgWAfgBQBIgDBIACQANAAAJALQAIALgDANQgCALgIAGQgIAGgLAAQhQgBg7ADQgKAAgHAIQgFAFgBAHIgMA/IgEASQgCALAEAGIAGAGQAOAKAJAOQAOAWgCAWIgDAuIAAAcQABAcAGAoQAGAnAHAcQANA4ASAdIACAEQBBBnBpApQBOAeBQAAQBWgBBHgjQAQgIARgLQAugfAkgxQAdgnAbg9IAghHIAQgfQAKgQALgKQAXgSAaAFQAYAEAOAXIABACQAIANAEATQACAKACAYIAFBOQAEA7ALArQAOA2AaApIANATQANASALALQA3A6BQAeQBMAcBTgBQBygCBihOQAcgWAeguQAQgZATgiQAUgkALgZIAXhIQADgNALgNQARgTAZgHQALgCAEgNIADgVIALhAQABgJgFgJQgDgFgIgDQiIg6iegqQhJgUhJgIQhLgJhSACQgiAChAAHQhDAIgeABQgjACgfgFQgdgGgggOQgagLgngTIhAggQgKgEgEgJQgFgKACgKQAEgOAMgGQANgGANAGIAuAXQAzAaAeAMQAWAKAbAGQAcAEAYgCQAngCAygGQBEgIAngBQBSgDBUAKQBNAJBNAUQCpAuCFA4QAYAKAOAWQARAcgFAfIgLBCIgBAEQgIBAg0ANQgNADgCAJIgXBKQgaA+glA5QgVAfgNARQgXAegYATQhyBaiFACIgIAAQheAAhVgig");
	this.shape.setTransform(93.8267,47.1131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808FC7").s().p("ACZCjIhYgqIgBAAIgQgGQgjgOgkgKIhdgVQgRgEgVgBIgZgDQgjgDgkAAIg9ABQgLg7AKhCQAIg1ASgxQALgbAMgPQCCAEB6AoQCoA1ChBqIgJAoQgaB1g3A7g");
	this.shape_1.setTransform(46.9869,38.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4B0D8").s().p("AgpgcQh6goiBgEQAQgWAXgJQAkgOAdgGQApgIAzADQBHAEBIAPQBeATA8AdQBDAjASAyQAOAngMBDQighqipg0g");
	this.shape_2.setTransform(49.9343,25.1841);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4B0D8").s().p("Aj8BYQAGguAIgbQALgqAVgYQAhgqBMgJQBCgHBeAOQBIAMBFAUQAfAKATAJQhTA1heAiQheAihhALIiLASg");
	this.shape_3.setTransform(129.075,38.0972);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808FC7").s().p("AkjCIQgihIAMhyICMgRQBhgLBdgjQBfghBTg2QAwAVAoAlQAiAeAAA8QABBUgbBMIhRAeQgSAIgXAGIhiAYIgEABQgmAHgoAFIjqAMQgcgdgSgkg");
	this.shape_4.setTransform(135.0315,53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E75B7").s().p("Ag/BfQhKgMhCgnQglgWgcgcICrgHQAfgCAhgEQAkgEAqgIIBlgYQAXgHASgHIBSgeQgcBOg4AzQgtAog3ARQgqANguAAQgdAAgfgFg");
	this.shape_5.setTransform(137.275,74.5354);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E75B7").s().p("AgeBwQhQgPg5grQgvglgagzQgUgmgJgtIA9gBQAmAAAgAEIAaACQAVACAQADIBdAVQAjAJAlAPIAQAGIABAAIBXAqIBMAuIgIAJQg4A2hXARQgnAHglAAQglAAgkgHg");
	this.shape_6.setTransform(42.8,56.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D4594").s().p("AEUGBQhRgeg2g5QgLgMgNgRQghgtgRg6QgNgwgFhCIgFhNQgCgYgCgKQgEgTgIgOQgOgZgZgDQgagFgXARQgMAKgJARIgQAeIggBHQgbA9gdAoQgkAxguAeIghATQhHAjhWABQhRABhNgeQhqgphChrQgTgggQhEQgOg8gCg+IgBgaIAEgvQABgNgGgQQgJgXgVgPQgJgGABgNIAEgWIAMhAQABgGAFgGQAHgHAKgBQCNgHCpAPQCZAOCQA6QAfANA5AdQA7AdAeANQAgANAdAGQAiAFAggBQAfgCBCgIQA/gHAjgBQBSgDBLAKQBJAIBJAUQCdAqCJA5QAJAEAEAJQADAIgBAGIgLA/IgDAWQgEAMgLACQgZAHgRATQgLANgDANIgWBFQgYA5giA0QgSAdgMAPQgTAYgSAPQhiBNhzACIgIAAQhOAAhIgbg");
	this.shape_7.setTransform(93.8077,47.0924);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo26, new cjs.Rectangle(0,0,187.7,94.2), null);


(lib.Símbolo25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGSLiQg0gNgdgwIg+hmQgEgGACgGQACgHAFgDQAGgEAGACQAGACAEAFIA+BnQAWAjAoALQAoAKAigVQAogZAFguQAFgmgZggIoorOIAkhOQAFgLABgNQADgigUgbIknl5QgEgGgGgBQgHgBgGAEIAAAAQgGAFgBAHQgBAHAEAFIDMESQAFAHgBAIQgBAJgJAHQgLgCgOgIQgNgHgHgKIi7kAQgEgFgHgBQgHgCgGAEQgGAFgBAHQgBAGAEAGIDDEZQAEAHgBAIQgBAKgIAFQgIAFgJgBQgIgCgGgIIi/kaQgEgGgIgBQgHgCgGAFQgFAEgBAHQAAAHADAFIC4EgQAFAHgBAIQgBAIgHAGQgIAHgJgCQgKgCgFgIIi1khQgEgGgHgBQgHgCgGAEIgBABQgGAEgBAIQgBAFADAFID2GcQAMAUAUALQAUAKAXgBIBWgEICPDtQAEAFgCAHQgCAGgFADQgGAEgGgCQgGgBgDgGIiHjdIhCAEQggACgcgPQgcgPgQgcIj2mcQgIgOACgQQACgWASgNQASgLAUAEIADABIABgBQACgUAPgMQARgOAVADIAGACIAAgBQABgPAJgKQAKgMAOgEQAOgFANAEIAAAAQACgOAGgIQAPgVAZgBQAYAAAPATIEkF3QAWAcAEAfQAEAggOAdIgaA9IIbK9QAUAZAFAbQAIAogOAkQgPAkggAWQghAXgmAAQgQAAgQgFg");
	this.shape.setTransform(56.0982,74.2608);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E95488").s().p("AGcLEQgogJgWgjInVsGIhWAEQgXABgUgKQgUgLgMgUIj2mcQgDgFABgHQACgHAFgDIABgBQAGgEAHACQAHABAEAGIC1EhQAFAJAKABQAJACAIgHQAHgFABgIQABgJgFgHIi4kgQgEgFABgHQABgHAFgEQAGgFAHACQAIABAEAGIDAEbQAFAHAIACQAJACAIgGQAHgFACgIQACgJgFgIIjDkZQgEgGABgHQACgHAFgEQAGgEAHACQAHABAEAFIDLEVQAFAHAIACQAJACAHgFQAIgFACgKQABgJgFgHIjMkSQgEgFABgHQABgIAGgEIAAAAQAGgEAHABQAGABAEAGIEnF5QAOASADAXQACAXgIAVIgkBOIIoLOQAaAhgHApQgGApgjAYQgZARgcAAQgLAAgLgDg");
	this.shape_1.setTransform(56.0935,74.2542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo25, new cjs.Rectangle(0,0,112.2,148.5), null);


(lib.Símbolo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGzEpQgMgGADgMQAiiTgPiKQgRiQhChzQmYBemfB0QgHACgGgEQgGgFgBgHQgBgGAEgFQADgFAGgCQGahyGdhgQALgCAKAEQAKAEAFAKQBFB3ASCUQARCTgkCZQgCAIgHADQgDACgEAAQgDAAgEgCg");
	this.shape.setTransform(146.2331,29.8929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKHnQiugmiWheQiZhfhxilQhyilg2jOQgDgKAEgKQAEgJAIgGQADgDAFgBQEShdFMhlQAHgCAGAEQAGADACAHQABAGgDAGQgDAGgGACQk7BekiBjQAyDABnCbQBwCoCaBhQCYBeCuAjQCiAhCtgUQDagkCuh4IAIgGQAFgDAGAAQAGABAEAEQAFAFAAAIQgBAIgGAEIgIAGQi1B9jhAkIgBAAQhEAIhDAAQhyAAhtgXg");
	this.shape_1.setTransform(77.0128,82.5704);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA4QgKgDgEgKQgFgKACgKQADgOASgSQAWgWAYgSQAZgRADAUQADAPgLAVQgOAfgLAOQgKANgJAFQgIAFgIAAQgFAAgFgCg");
	this.shape_2.setTransform(50.3924,74.4497);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAxQgRgBgagRQglgZgVgUQgagZAYgHQASgFAbAJIAeAJQATAFAMAHQARAIAIAKQAMANgDAQQgDALgLAHQgJAFgLAAIgDAAg");
	this.shape_3.setTransform(145.476,51.0924);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBHQgIgJgCgMQgDgTALgcQAPglARgdQATgeAMAWQAJAQgDAdIgDAgQgBATgEANQgEASgIALQgLAOgPAAQgMAAgJgKg");
	this.shape_4.setTransform(68.1081,83.3762);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIBFQgQgKgQgdQgVgkgMgkQgOglAbAFQAUAEAWAWIAZAZQAPAOAIALQANARADANQAEAUgLAMQgIAKgOABIgDAAQgMAAgKgGg");
	this.shape_5.setTransform(131.5403,66.7515);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBVQgMgGgGgMQgKgSABggQABgqAHglQAIgmAUASQAPANAHAeIAKAiQAGATABAOQACAUgEAOQgGATgQAGQgFACgEAAQgHAAgIgEg");
	this.shape_6.setTransform(88.8288,85.3119);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQBdQgPgDgKgKQgQgOgMgkQgOgsgFgsQgGgrAdAMQAUAIATAeIAWAhQANATAHAOQAJAXAAAPQABAVgPANQgJAGgLAAIgHAAg");
	this.shape_7.setTransform(111.3016,78.7487);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E27D88").s().p("AlTGAQh/gohvhnQh9h1AShlQALg9AqgnQAlgiAzgKQAvgKAkANQAmANADAdQAAAEgFANQgDAKADAHQAeA5B3AFQBsAFCMgkQCKgkBjg7QBsg/ALg+QABgIgDgKQgJgVgBgIQgDgNAKgQQA0hTBSgYQBOgXBAApQBEAqAQBeQARBqg8CPQgyB2hnBgQhkBeiHA4QioBGioAAQiAAAiAgng");
	this.shape_8.setTransform(99.8901,65.0437);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D21C58").s().p("AjAJnQivgjiYhfQiahghwipQhnicgyi/QNzkqOLjRQBbCdgEDLQgDDIhdC8QhiDFisCEQi8CRjzAnQhCAIhBAAQhnAAhkgUg");
	this.shape_9.setTransform(97.2315,66.8178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo24, new cjs.Rectangle(0,0,194.5,133.6), null);


(lib.Símbolo23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJQG6IyTi0IgCAAQhlgSg+hEQhGhMAPhlQANhXBJg5QBRhBB+ADQASglAggYQA2gnBAAKQAfAEAcARQBChfBrgrQBrgsB8AUQB/AUBhBRQBuBaAbCJQC+BTAQCpQA9AXAdAzQAbAugJA0QgKA/g1AlQgtAfg7AAQgUAAgVgDgAqRhzQhEApgPBHQgPBFAqA7QAvBABfARISUCzQA8AKAogaQAkgXAHgoQAGgpgaghQgegkg6gKQAJizjThMQgOh/hehWQhXhRh6gTQh3gShlAvQhuA0g0B1QgigxgvgIQgrgHgjAcQgjAbgGAuQgagDgYAAQhTAAg7Ajg");
	this.shape.setTransform(80.2186,44.5178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEB3DB").s().p("AJSGAIyNiyQhfgRgvhAQgqg7APhFQAPhHBEgpQBNguBzAOQAKhKBFgSQBHgSAyBJQA1h3BxgzQBmgwB5AVQB4AWBVBPQBbBWAOB9QDTBMgJCzQA7AKAdAlQAbAigIApQgHApgmAWQgcARgnAAQgRAAgUgEg");
	this.shape_1.setTransform(80.2121,44.5093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo23, new cjs.Rectangle(0,0,160.5,89.1), null);


(lib.Símbolo22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak5JuQgzgggXg1QgihOAqhUQAphSBcgnQA1gXA6AAIACAAIAGr1QABg3AjgkQAkgkA1ABIAAAAQAiAAAXAYQAYAYgBAjIAAATQAFAYAOAcQAXAuApAoIAhAfQBhBZApBAQBIBugBCAQgBCChbB4QgwBAg3AoQgVARgbAAQgYgBgTgNQgUgNgJgXQgJgWAFgYQAFgYASgSIADgDIA5g/QA5hNAAhAQABg4gwg8QgmgvhAgtIgFJLQABBDgrA7QgpA7hIAfQg0AWg6ABQhCgBg0gfgAjcE4QhEAegfA6QggA6AXA2QAPAjAlAWQAjAUAuAAQAsAAApgRQA2gXAggsQAfgrgBgvIAFq6IAsAXQA0AdAsAkQCLBwgBB4QgBBUhEBcQgVAdgZAbIgVAUQgJAJAEAJQADAJAJAAQAFAAAFgEIAagVQAfgcAaghQBUhqABhzQABh5hNhnQgYghh5h1Qg5g4gdhDIgRg4IAAgaQAAgSgRAAQgZAAgRARQgRARAAAcIgHNDQgegNglgBQgrAAgpARg");
	this.shape.setTransform(40.3025,65.3497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D4594").s().p("AjxJGQhAgRgXg2QgXg1Agg7QAfg6BEgdQAngQAogBQAngBAhAOIAHtCQAAgcARgRQARgSAZABQARAAAAASIAAAZIARA5QAdBDA5A3QB5B2AYAgQBNBngBB6QgBByhUBqQgaAhgfAdIgaAVQgLAJgJgLQgIgKALgLIAVgVQAZgaAVgdQBEhdABhUQABh4iLhwQgsgjg0gdIgsgXIgFK6QABAugfArQggAsg2AXQgpASgpAAQgZAAgYgHg");
	this.shape_1.setTransform(40.3153,65.3572);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo22, new cjs.Rectangle(0,0,80.6,130.7), null);


(lib.Símbolo21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdIMQgPgKgIgPQgPgeAUgdQgFgOACgQQADgPALgOQgKgfAYgfQgMgbAMgfIAMgaIABAAQgSgeARghIgiAVIhhA9IgNAIQgcASgRAHQgdAMgcAAIgHAAQgogBgVgWQgLgKgDgOQgSgJgIgQQgDgFgBgGQgQgIgIgPQgFgIgBgMQgtgOAAgqQgBgZAQgRQAQgSAagDQA3gIBngcIAwgNQAcgGAugQIgLgIIgBgBQgmgdg9gmIhJgwIgCgBQgygjgWgRQgogfgcgeQgagbAAggQABgUAKgSQAKgQARgJQARgJAVAAQAGgZAZgRQARgLAUAAQAGgWAWgOQANgJARgBQAEgLAGgGQAWgdAlAAQAKAAARADQAVAFAWAIQAuASAzAgQAeATA3AqIATANQAQAMAiAfIAhAeQAIAFABABIADgDQAxgzBBgbQBBgbBWgGIADAAIANgBQARAAAOAIQANAJAGAPQAQAngpAbIgBABIgFAEIgkAhQgSATgJASQgSAlAiAWIATAKQAcAQAOALQBaBEADBZQAEBohIBUQhDBPh8BeQhFA1gvAeQhDArg+AYQgWAKgnAKQgIACgKAAQgSAAgOgIgAgTBmQAPAAAIANQAHALgLAPIghAqQgRAWASAQQAFAFAAAGIgFALIgQAhQgIAWAOALQANAMgOAMQgOAMgDAJQgFAOALAOQAHAKgNAIQgWAPAOAUQAGAKgLALQgMANAFALQAGALANAAIAIgBQAjgIAVgKQA7gXBAgpQAsgdBEg0QB4hbBBhLQA+hKgEhXQgBgngWghQgTgbgjgaQgKgJgSgKIgdgRQgfgTgJgeQgIgdARghQAMgYAWgXQANgNAegaIAMgJQAGgHgDgGQgCgGgKAAIgOABQiYAKhVBZQgPAOgRAAQgSAAgSgOQgLgKgdgbQgZgXgPgMQhIg1gVgNQg1gjgvgRQgUgIgRgEQgLgCgHAAQgRAAgKANQgOASAWAZQgJAAgOgFQgPgGgHAAQgHAAgGAEQgOAKACAPQACAJAHAUQgHgCgQgFQgOgFgIAAQgIAAgIAFQgPAKAAARQgBAKAIAUIgGAAQgFABgFgDIgJgFQgKgCgIAAQgYAAgJAPQgNAXAXAZQAaAdAnAdQAXASAvAhIBYA5QA2AiAgAYIAiAcQASAQgCAJQgBAJgVAIQhCAYgnAKIhoAcQg9AOgtAHQgXACAAAVQABAIAHAFQAEADALADIAJABIAFAAQAKAAADAEQADAEgFALQgLAXAcAEIALADQAEACgFAKQgGAPATADIAYACQgCAFgFAKQgDAJAGAFQAHAHAJACQAFACANABIAFAAQAXAAAagNIAtgbICjhlQAVgOAUgCg");
	this.shape.setTransform(52.2605,53.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGASQgIgEgDgHQgCgHADgGQADgIAHgDQAHgCAHADQAHADADAHQADAHgDAHQgEAHgHADIgHABIgGgBg");
	this.shape_1.setTransform(75.3932,24.3432);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E84161").s().p("AhQHgQgFgLAMgNQALgMgGgJQgOgUAWgPQANgJgHgJQgLgPAFgNQADgJAOgMQAOgMgNgMQgOgLAIgWIAQghIAFgLQAAgGgFgFQgSgQARgWIAhgqQALgQgHgKQgIgOgSABQgUACgWANIiiBmIguAbQgcAOgZgBQgNgBgFgCQgJgCgHgHQgGgGADgIQAFgKACgFIgYgCQgTgEAGgPQAFgJgEgCIgLgDQgMgBgFgHQgGgHAGgMQAFgMgEgEQgEgEgMABIgKgBQgLgDgEgDQgHgFgBgJQAAgUAXgCQAtgHA9gPIBogcQAngKBCgYQAVgIABgIQACgJgSgQIgigcQgggYg2gjIhYg4QgvghgXgSQgngegagcQgXgZANgXQAGgKAPgEQAOgDAQAEIALAFQAHADAHgBQgIgUABgLQAAgQAPgKQAMgIASAFIAfAJQgHgTgCgJQgCgQAOgJQALgHARAGQAXAIAHAAQgLgMgCgKQgDgLAIgLQAIgKANgCQAJgBAPADQARAEAUAHQAvASA1AjQAVANBIA1QAPAMAZAXQAdAbALAJQAmAfAegfQBVhYCYgKIAPgBQAJAAACAGQADAGgGAGIgMAJQgeAagNAOQgWAXgMAYQgRAgAIAeQAJAdAfAUIAdARQASAKAKAIQAjAbATAbQAWAhABAnQAEBXg+BJQg/BLh6BcQhEA0gsAdQhAApg7AXQgVAJgjAJIgIABQgNAAgGgLg");
	this.shape_2.setTransform(52.2597,53.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo21, new cjs.Rectangle(0,0,104.5,106.4), null);


(lib.Símbolo20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1wMIIgLgFQgbgQgRggQgKgSgJgeIhzl6QgRg+gUgWIgPgPQgVgUgKgOQgUgbgCgfQgDgfAQgZQAXgkA7gLQFFg8EMAHQAfgbA3goQgSgPgGgVQgFgTAEgUQAFgUAOgQQAOgQAZgNQCOhJChAJQBdgvBjgoQgDgIgBgFQgIgqAsglQBGg5ArgvIA0g5QAdggASgRQAegbAdgQQBjg2CgApQBgAZB5BGQArAZApAcQCNgOCLgCQALAAAHAIQAIAHgBALQgBAKgHAHQgHAHgKAAQiOACiGAOIgRACQgvghgxgdQh0hChZgYQiMgkhSAtQgaAOgcAbIgvAxQhLBShZBNQgUAQADANQACAKAMAHIAuATQiYA3iHBFIgBAAQiZgMiIBHQgRAIgHAJQgMANAEAPQADAJAMAIQAHAEALAEIAsAPQhdA+hPBCIAAgBQkNgIlKA8QgmAHgLASQgIAMADARQACAPAKAOQAHAJAOAOIAWAWQARATANAdQAIATAKAkIBzF5QAPA1AZAPQAPAHAQAAQAYAAAZgSQCch1BUhVQBzh0BBiFIgHgGQCKAZCTAMQAQApgCAqIgDAiQgCAVABANQACASAHAOQAIAQANAIIADABQAbAOAxgYQBCggBFg1QA1gpBFhAQBpgEBjgKQCLgOCRgbQgZAugBAuQgBAoAVARIAFAEQAWAMAogIQAxgLAmgbQAvghAlg1QAcgnAghBQD8hKDYhsQAigRA1gdQFCizDMjvQhWgbhigWQgJgCgGgHQgFgHAAgKQABgLAJgHQAJgHALADQBcAUBfAdQAGABAEADIACABIAAAAQANAHAHAOQAHAOgCAOQgDAQgLAMQjRD1lJC3QglATg0AaQjWBsjyBJQglBKgoAvQgpAxgyAeQgyAfg2AHQgwAGgggTIgLgIQgpghAChBQAAgMADgPQhuAShgAKQhcAJhhAEQhDA9g0AoQhGA0hDAhQhFAigygYIgGgDQgXgOgOgZQgPgZgCgfQgCgXAEgdIABgWQABgQgDgSQhsgKhmgRQhFCAhzBzQhPBOiLBpQgfAXgYAJQgYAKgWAAQgVAAgUgJg");
	this.shape.setTransform(168.7562,78.4659);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4ADD8").s().p("AgZAgQgOgKgCgSQgBgQALgNQALgOARgCQAQgCANALQAOALACASQABARgLANQgLANgRABIgEABQgOAAgLgKg");
	this.shape_1.setTransform(118.075,64.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4ADD8").s().p("AgZAgQgOgLgBgRQgCgQALgNQAKgOASgCQAQgCANALQAOALABASQACAQgLANQgKAOgSACIgEAAQgOAAgLgKg");
	this.shape_2.setTransform(141.3,69.6686);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4ADD8").s().p("AgaAgQgNgKgBgSQgDgQAMgNQAKgOASgBQAQgCANALQAOAKACASQACAQgLANQgMAOgRABIgEABQgOAAgMgKg");
	this.shape_3.setTransform(164.85,76.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4ADD8").s().p("AgaAhQgNgMgBgQQgDgQAMgOQAKgNASgCQAQgCANALQAOAKACASQACAQgLANQgMAOgRACIgEAAQgOAAgMgJg");
	this.shape_4.setTransform(151.8,53.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4ADD8").s().p("AgZAgQgOgLgCgRQgCgQALgNQALgOASgBQAQgDAOALQANALABASQACARgLANQgKANgSABIgEABQgOAAgLgKg");
	this.shape_5.setTransform(174.8,59.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A4ADD8").s().p("AgZAgQgOgLgBgRQgCgQALgNQALgOARgCQARgBAMALQAOALACARQACAQgMANQgKAOgRACIgFAAQgOAAgLgKg");
	this.shape_6.setTransform(198.35,66.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A4ADD8").s().p("AgaAhQgNgMgBgRQgCgQALgOQALgNARgBQAQgDANAMQAOAKABASQADAQgLANQgMAOgRACIgEAAQgOAAgMgJg");
	this.shape_7.setTransform(185.3,43.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A4ADD8").s().p("AgZAgQgOgKgCgSQgBgQALgNQALgOARgBQAQgCANALQAOALACAQQABARgLANQgLAOgRABIgEABQgOAAgLgKg");
	this.shape_8.setTransform(208.325,49.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A4ADD8").s().p("AgZAgQgOgKgCgSQgBgQALgNQALgOARgCQAQgCANALQAOALACASQABARgLANQgLANgRABIgEABQgOAAgLgKg");
	this.shape_9.setTransform(231.875,56.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A4ADD8").s().p("AgZAgQgOgLgCgRQgCgQAMgNQAKgOASgCQARgBANALQANALABARQACAQgLANQgLAOgRACIgEAAQgOAAgLgKg");
	this.shape_10.setTransform(218.8,33.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#39509E").s().p("AgZAgQgOgLgCgRQgBgQALgNQALgOARgCQAQgCANALQAOALACASQACAQgLANQgLAOgSACIgEAAQgOAAgLgKg");
	this.shape_11.setTransform(135.0314,58.5186);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#39509E").s().p("AgZAhQgOgLgCgRQgCgRAMgNQAKgNASgCQAQgDAOAMQANAKABASQACAQgLANQgLAOgRACIgEAAQgOAAgLgJg");
	this.shape_12.setTransform(158.05,64.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#39509E").s().p("AgZAhQgNgLgCgSQgCgQALgNQAKgOASgCQARgBAMALQAOALACARQACAQgLANQgMAOgQACIgFAAQgOAAgLgJg");
	this.shape_13.setTransform(181.6,71.6314);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#39509E").s().p("AgaAgQgNgKgBgSQgCgRALgMQAKgOASgCQAQgCANALQAOALACASQACAQgLAOQgLANgSABIgEABQgOAAgMgKg");
	this.shape_14.setTransform(168.55,48.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#39509E").s().p("AgZAhQgOgMgCgRQgBgQALgOQALgNARgCQAQgBANAKQAOALACASQABAQgLANQgLAOgRACIgEAAQgOAAgLgJg");
	this.shape_15.setTransform(191.575,54.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#39509E").s().p("AgZAgQgOgLgCgRQgBgQALgNQALgOARgCQAQgCANALQAOALACASQABAQgLANQgLAOgRACIgEAAQgOAAgLgKg");
	this.shape_16.setTransform(215.125,61.6186);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#39509E").s().p("AgZAhQgOgLgBgSQgCgQALgNQAKgOASgCQAQgBANALQAOALABARQACAQgLANQgKAOgSACIgEAAQgOAAgLgJg");
	this.shape_17.setTransform(202.05,38.4814);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#39509E").s().p("AgZAgQgOgLgCgRQgBgQALgNQALgOARgCQAQgBANALQAOALACARQABAQgLANQgLAOgRACIgEAAQgOAAgLgKg");
	this.shape_18.setTransform(225.075,44.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39509E").s().p("AhYBXQg2hkABhzQAAg8AQg5IgBAgQgBCJBLBxQBJBvB6A1Qg1AcgiASQhbg/g1hhg");
	this.shape_19.setTransform(265.5991,53.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglAtQgSgPgDgYQgCgXAPgUQAQgSAYgCQAXgDATAPQATAPACAZQADAXgQATQgPATgYADIgGAAQgUAAgRgOg");
	this.shape_20.setTransform(283.2056,39.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14B9E4").s().p("AsTG7QjjgKjUgrQhWgRgWhUQgWhUBDg5QELjjF4iWQGGibG7gtQE0gfErAbQEgAaECBPQjLDvlDCyQg0AdgjARQjkBzkEBKQkMBNkgAdQilARijAAQhHAAhHgEg");
	this.shape_21.setTransform(198.4124,64.5563);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39509E").s().p("AmQCGQgWgIgCgNQgDgNAUgQQBZhOBLhRIAvgwQAbgbAagOQBTgtCMAkQBPAVBlA4QBbAxBKA6IqvCzg");
	this.shape_22.setTransform(177.3054,24);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39509E").s().p("AidB8QgOgHgJgRQgIgOgBgTQgBgNACgVIADghQAChHgog5IG/AHQhdBZgzAoQhTBEhOAmQgeAPgWAAQgNAAgLgFg");
	this.shape_23.setTransform(128.725,116.5613);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#39509E").s().p("AiSB8QgWgRABgoQACg0Ahg4QAUgjAwg6IDoABQgbA5gRAeQgaAvgcAhQgiAognAaQgsAcguAGIgRABQgXAAgNgLg");
	this.shape_24.setTransform(209.3478,106.0375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39509E").s().p("AioAvQgdgKgEgPQgFgOANgNQAHgJARgIQBCgjBKgPQBJgPBLAGQAfACATAJQAcAMAHAYIkKB1g");
	this.shape_25.setTransform(100.0904,59.4643);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7FCBDF").s().p("AhyFsQgSgIgMgVQgIgPgIgaIhyl5QgLgjgIgTQgMgdgRgUIgWgWQgPgNgHgJQgKgOgCgPQgDgRAIgNQAMgRAmgHQFJg+EMAJQgEBFAZBIQAdBTA4AqQhACBhtBwQhSBViSBvQgpAfgfAAQgLAAgKgEg");
	this.shape_26.setTransform(42.9202,115.1153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo20, new cjs.Rectangle(0,0,337.5,157), null);


(lib.Símbolo17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEfDEQgIgDACgJQAXhhgKhbQgLhegshNQkXBBkIBKQgFABgEgDQgEgDgBgFQgBgJAKgCQEFhJEahCQAPgDAJANQAtBPAMBiQALBhgXBlQgCAFgEACIgFABIgFgBg");
	this.shape.setTransform(111.8092,19.7265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGFCQhzgZhjg+Qhlg/hLhtQhLhtgkiIQgCgGADgHQACgGAGgEIAFgDQDEhCDMg+QAFgBAEACQAEADABAEQACAKgJADQjHA8jJBEQAhB+BEBmQBKBwBmA/QBkA/BzAXQBrAWBygOQCPgXB0hQIAGgDQAHgGAGAHQAEAEAAAFQgBAFgEACIgFAEQh4BTiUAYIgBAAQguAFgsAAQhLAAhHgPg");
	this.shape_1.setTransform(66.0833,54.5279);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgGgDgDgGQgDgHACgGQABgJAMgMQAQgQAOgKQARgMACAOQABAJgHAOIgHAPQgFAKgEAFQgHAJgFADQgGADgFAAIgHgBg");
	this.shape_2.setTransform(48.4882,49.1536);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAgQgMAAgQgMQgWgOgQgPQgRgRAQgEQALgEATAGIATAGQANAEAHAEQALAFAGAHQAJAJgDAKQgCAHgHAFQgGADgHAAIgDAAg");
	this.shape_3.setTransform(111.3137,33.7196);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA2QgHAAgGgHQgGgGgBgIQgCgLAHgUQALgZAKgSQANgUAIAPQAGAMgDASIgBAUQgBANgCAIQgEAMgFAHQgIAKgIAAIgBAAg");
	this.shape_4.setTransform(60.2091,55.0465);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFAuQgKgHgLgTQgOgXgIgYQgIgYARADQAOACAOAPIAQAQQAKAKAFAGQAIALACAJQAEANgIAJQgFAGgKABIgBAAQgIAAgHgEg");
	this.shape_5.setTransform(102.1167,44.0858);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA4QgIgEgEgIQgGgLAAgWQABgcAEgYQAFgZAOAMQAJAJAFAUIAGAWQAEAMABAKQABANgCAJQgFANgKAEIgGABQgEAAgFgDg");
	this.shape_6.setTransform(73.8781,56.3285);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALA9QgKgCgHgGQgKgKgIgYQgJgegDgbQgEgdATAIQANAGAMAUIAPAVQAJAMAEAKQAGAPAAAJQAAAQgKAHQgFAEgHAAIgFAAg");
	this.shape_7.setTransform(88.7402,52.0123);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E27D88").s().p("AjgD+QhTgahKhFQhThNAMhCQAOhPBQgQQAegHAZAJQAYAJACASQABADgDAIQgDAHACAFQAUAlBPAEQBHADBdgXQBagZBCgmQBHgqAHgpQABgHgCgFQgGgOgBgFQgCgJAHgLQAjg2A2gQQAzgPArAaQAtAcAKA+QALBGgnBfQhEChi9BPQhvAvhvAAQhUAAhVgag");
	this.shape_8.setTransform(81.1789,42.9345);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D21C58").s().p("Ah/GWQh0gXhkg/Qhmg/hKhwQhEhnghh9QJHjGJXiKQA8BogCCGQgCCEg+B8QhACChyBYQh8BfihAaQgrAGgrAAQhEAAhCgOg");
	this.shape_9.setTransform(79.4532,44.1104);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AL+I8I3sjoIgCgBQiCgXhRhZQhahhAUiEQARhwBdhKQBphUCjAEQAXgvAqgfQAigZAngKQAogKAoAGQAqAHAiAVQBWh7CKg4QCLg4ChAZQCkAaB9BoQCNB2AkCwQCGA7BEBeQA3BNAKBhQBOAeAlBBQAjA8gLBEQgMBRhGAwQg5AohNAAQgZAAgcgEgAtSiVQhYA1gUBcQgTBaA3BLQA9BTB7AWIXsDpQBNAMA0ghQAvgeAIg0QAJg1gjgqQgmgwhLgMQALjnkQhkQgSikh6hwQhwhnifgZQiZgZiDA+QiPBEhCCXQgshAg+gKQg3gIgtAjQguAjgIA8QgigFggAAQhqAAhMAug");
	this.shape_10.setTransform(103.7747,100.3338);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AEB3DB").s().p("AMBHxI3jjmQh7gXg9hSQg3hMAThaQAUhcBYg1QBjg7CVASQAGgtAdggQAcggAngKQBcgYBCBfQBDiZCThEQCFg9CcAcQCbAbBuBnQB2BvASChQEQBkgLDnQBMAMAmAxQAiAsgJA0QgKA1gxAdQglAWgxAAQgXAAgZgFg");
	this.shape_11.setTransform(103.7752,100.3264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo17, new cjs.Rectangle(0,0,207.6,158), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Eg5aASrQhkAAAAhkMAAAgiNQAAhkBkAAMBy1AAAQBkAAAABkMAAAAiNQAABkhkAAg");
	this.shape.setTransform(377.475,119.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,755,239);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyrLEQiMAAhUhMQgogjgVguQgVguAAg0QAAhbA+hFQBDhLB0gQQAiinB6hpQALgJAOACQAOACAIAMQAHAKgCALQgBAMgJAIQh8BrgUCwQhvABhCA8Qg8A2AABOQABBOA8A1QBEA8BzAAMAjNAAJQC4gEBqhqQBihigIiHQgIiLhzhhQiChsjdgIQAChXg6g+Qg5g9hRAAQhcAAhPBSQg+jqjAiCQiwh4jkAAQh9AAh1AmQh5AnhgBLQgLAIgNgDQgOgCgHgMQgGgKACgMQACgMAJgHQBrhRCGgrQB+gpCCAAQDtAAC5B3QC4B3BTDMQBEgoBIAAQAzAAAuAUQAvAUAkAlQA5A6APBPQDpAXCECFQB0B2gBCdQgBBMgeBEQgfBFg4A1Qg9A4hSAfQhTAfhiACg");
	this.shape.setTransform(0.001,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F197B1").s().p("AydKFQh4AEhIg7Qg/g1gChPQgChPA7g4QBCg9BxgBQAmlRGhhUQA/jlDFiHQC2h8DogFQDogEC0B4QDFCCA/DuQA6g9BEgQQA+gPA5AZQA3AYAhA0QAiA2gCBBQDdAICCBsQBzBhAICLQAICHhiBiQhqBqi4AEg");
	this.shape_1.setTransform(0.0019,0.0419);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,-71.6,300.4,143.3);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+gJaIAAyzMA9BAAAIAASzg");
	mask.setTransform(195.325,60.2);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjFFzIBpgnQAQgFAEANQABAGAAAdIAAAkQAAAYgEAKQgFAOgSAHIhjAjgAjFCcIEMhiQAQgFAEANQABAFAAAdIAAAkQAAAYgEALQgFAOgSAGIkGBfgAjFg7IIHi9QAggLAIgLQAHgKgOgFQANAFADAJQACAIAAAtQAAAygEAQQgFAVgSAGIofDEgAjOiQIgGgBIiPg0QgRgGAAgeQAAALAGADQAFADAOgEIKdjzQAggMAIgLQAHgJgMgFQAMAFACAIQACAJAAAsQAAAzgEAPQgFAVgSAGIoaDEQgFABgGAAIgDAAg");
	this.shape.setTransform(37.325,69.5875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1650").s().p("ABhDKIC2hCIBSAeIgDgBQAPAGgHAKQgIALggALIhwApgAlqDoQgGgDAAgLIAAhPQAAgWAVAIICTA1IiPA1QgIACgFAAIgGgBgAk5A1QgcgKgNgQQgOgSAAgaIAAhCQAAgLAIAAQAEABAQAGIG1CeIi0BBgAiHhfQgcgKgNgQQgPgRAAgbIAAhDQAAgLAJAAIAUAHQB0ArGRCOIAKAFQAIAGgJAJQgLAKgbAKIhxAog");
	this.shape_1.setTransform(36.9007,24.399);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AUzDXIhXlLIhbD7Ih7AAQgPABgMgIQgNgHgDgMIhLjhIhVFLIh1AAIBvmtICIAAQAUAAANAJQANAJAHAUIBEDVIBXj7IB4AAQAcAAAPAKQAQAMAHAbIBgF8gAIODXIgmhQIjxAAIgmBQIiDAAIDXmtIBxAAQARAAALAHQAJAFAIAPIDMGSgAG9AwIhPirIhRCrICgAAgAjkDXIAAlKIjPgNIAAhWIIUAAIAABWIjOANIAAFKgAoiDXIglhQIjwAAIgmBQIiDAAIDWmtIBxAAQASAAAKAHQAKAFAIAPIDMGSgApxAwIhPirIhRCrICgAAgA2mDXIAAmtIB7AAIAAFKIEgAAIgxBjg");
	this.shape_2.setTransform(245.975,41.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ATDB0IALgnQALAJAZAHQAfAKAiAAQAoAAAUgMQASgKAAgSQAAgfhAgOIgcgFQgwgJgWgOQgZgRAAggQAAgkAhgVQAhgWA2AAQApABAzARIgIAhQgjgOg0AAQgkAAgUALQgTALAAARQAAAQAMAJQANAIAiAHIAcAFQBkARAAA8QAAAlggAUQghAWg6AAQg/AAgugXgAMzCIIAAkMIDSAAIAAAlIioAAIAABJICXAAIAAAjIiXAAIAABUICtAAIAAAngAJICIQgSAAgIgLIi4jRIAADcIgoAAIAAkMIAcAAQALAAAFADQAGACAEAHIC2DIIAAjUIAnAAIAAEMgABVCIIAAkMIAqAAIAAEMgAkHCIIAAkMIAqAAIAADnICZAAIAAAlgAnqCIIg4hUQgOADgcAAQgwAAgfgRIAABiIgqAAIAAkPICVAAQA3AAAgAZQAeAYAAAmQAAAegRAXQgRAXgeANIA+BfgAqbAAQAkASAuAAQAzABAagUQAXgRAAgeQAAgVgQgPQgUgRgkAAIhuAAgAu+CIIAAkMIAqAAIAAEMgAygCIIgihGIidAAIghBGIgqAAICDkMIAfAAQAMAAAIAMIB+EAgAzTAeIg9h9Ig+B9IB7AAg");
	this.shape_3.setTransform(245.375,106.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,390.7,120.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg9ZAYUMAAAgwnMB6zAAAMAAAAwng");
	mask_1.setTransform(393,155.55);

	// Capa_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3).p("AYtJJMgxZAAAQidAAhuhvQhvhuAAidIAAmdQAAicBvhvQBuhvCdAAMAxZAAAQCdAABuBvQBvBvAACcIAAGdQAACdhvBuQhuBvidAAg");
	this.shape_4.setTransform(392.975,251.125);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(195.6,191.2,394.79999999999995,119.90000000000003), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKaBrCMAAAjWDMCU1AAAMAAADWDg");
	mask.setTransform(476.3,685.025);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E84061").s().p("ABCMwQgTgDgLgOIsswJQgJgLACgOQABgPAMgIIJ9n2QAwgmA9AIQA8AHAmAwIKnNeQAmAwgIA9QgHA9gwAmIp2HvQgNAKgOAAIgFAAg");
	this.shape.setTransform(84.3186,1002.303);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(5.9,920.7,156.9,163.29999999999995), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhBnBKqMAAAiVTMCDPAAAMAAACVTg");
	mask.setTransform(420.025,477.825);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg3mBKqQkKAAi7i8Qi8i8AAkJMAAAiBRQAAkKC8i7QC7i8EKAAMBvNAAAQEJAAC8C8QC8C7AAEKMAAACBRQAAEJi8C8Qi8C8kJAAg");
	this.shape.setTransform(420.025,477.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,840.1,955.7), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg9ZAYUMAAAgwnMB6zAAAMAAAAwng");
	mask_1.setTransform(393,155.55);

	// Capa_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjTG5QhDgUgvgdIBDioQAxAaA2AOQA2APA2AAQBUAAAqgYQArgXAAgvQAAgqghgVQghgUg/gSIhWgaQhsghg0g6Qg0g8AAhcQAAh7BihMQBihMCeAAQBlAAA9ARQA9AQAlARIgzCuQgogRg1gNQg0gMg2AAQhPAAgoAYQgpAXAAAoQAAAfAaAVQAaAUAyAOIBLAVQB0AgBCA6QBEA6AABnQAAB8hdBUQhdBWi3AAQhkAAhEgUg");
	this.shape_1.setTransform(748.475,64.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AirGoQhJgmgvhBQgvhAgXhVQgXhVAAhcQAAhaAXhTQAXhTAvg/QAvg/BJglQBJgmBhAAQBjAABIAmQBJAlAwA/QAvA/AYBTQAXBTAABaQAABcgXBVQgYBVgvBAQgwBBhJAmQhIAnhjAAQhhAAhJgngAh+jRQgxBBAACLQAACRAxBEQAyBEBLAAQBMAAAzhEQAyhEAAiRQAAiLgyhBQgzhChMAAQhLAAgyBCg");
	this.shape_2.setTransform(668.7,64.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj3HBQg6gKg4gRIAAtwIE6AAQBJgBBJAXQBKAXA6AwQA6AxAlBQQAkBPAABxQAAB/glBfQglBfhAA+Qg/A/hXAfQhVAehgAAQhRAAg7gKgAibEEIAdACIAdABQB4ABA/hMQA/hNAAiQQAAhvg0g/QgzhAhZAAIhwAAg");
	this.shape_3.setTransform(584.175,65.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhmHCIAAuDIDNAAIAAODg");
	this.shape_4.setTransform(524.475,64.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADtHCQgkABgYgMQgYgNgQgdIkpnuIAFIjIjJAAIAAuDICAAAQAfgBAUAKQAUAKAPAZIEwH4IgEokIDHAAIAAODg");
	this.shape_5.setTransform(465.275,64.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkzHCIAAuDIJnAAIAAC7ImZAAIAACbIFzAAIAAC3IlzAAIAAC6IGZAAIAAC8g");
	this.shape_6.setTransform(388.325,64.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiHFQgsAAgYgUQgZgVgKgkIj4s8IB6AAQAyAAAbAUQAaATAMArICUJIICqqaIDYAAIkNOJg");
	this.shape_7.setTransform(310.5,64.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADtHCQgkABgYgMQgYgNgQgdIkpnuIAFIjIjJAAIAAuDICAAAQAfgBAUAKQAUAKAPAZIEwH4IgEokIDHAAIAAODg");
	this.shape_8.setTransform(227.725,64.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkzHCIAAuDIJnAAIAAC7ImZAAIAACbIFzAAIAAC3IlzAAIAAC6IGZAAIAAC8g");
	this.shape_9.setTransform(150.775,64.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhmHCIAAuDIDNAAIAAODg");
	this.shape_10.setTransform(96.525,64.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjKHBQhSgMg6gTIAAtsIFFAAQCxgBBHBGQBHBGAABgQAABJgkAzQgkA0gwARQBFARAuA4QAuA6AABMQAACVhwBDQhyBDirgBQhBABhTgLgAiMEOIAzAHQAZADAXgBQBNAAAugcQAtgbAAg2QAAg1glgbQglgcg9AAIiEAAgAiMhjICBAAQBFAAAWgfQAVggAAgdQAAgdgUghQgUghhEAAIiFAAg");
	this.shape_11.setTransform(40.225,65.3);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,786,152), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg9ZAYUMAAAgwnMB6zAAAMAAAAwng");
	mask_2.setTransform(393,155.55);

	// Capa_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3).p("AYtJJMgxZAAAQidAAhuhvQhvhuAAidIAAmdQAAicBvhvQBuhvCdAAMAxZAAAQCdAABuBvQBvBvAACcIAAGdQAACdhvBuQhuBvidAAg");
	this.shape_5.setTransform(392.975,251.125);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(195.6,191.2,394.79999999999995,119.90000000000003), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EiudCboMAAAk3PMFc6AAAMAAAE3Pg");
	mask_2.setTransform(1116.55,996);

	// Capa_3
	this.instance = new lib.Image();
	this.instance.setTransform(2233.1,0,1.0375,2.0677,90);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0,0,2233.1,1992), null);


(lib.Símbolo51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(195.95,-37.05,1,1,0,0,0,393,155.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACLDlIg6igIiiAAIg6CgIgxAAICtnJIAPAAQAJgBAEADQAFAEAEAJICnG6gABEAfIhEi9IhDC9ICHAAg");
	this.shape.setTransform(318.775,58.5214);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_1.setTransform(289.875,58.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABuDkIhmibIgVACIgZABQgWAAgTgDQgUgCgRgGIAACjIgsAAIAAnHICaAAQA6ABAjAUQAjATAPAgQAPAfgBAlQAAAggKAdQgLAcgVAXQgWAXgjANIBtCngAh0AWQASAGAUAEQAUADAWAAQA4AAAegTQAfgSALgcQAMgdgBgcQABgXgJgWQgIgXgXgPQgXgPgqgBIhzAAg");
	this.shape_2.setTransform(262.625,58.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRDVQgjgSgWggQgWgggLgrQgKgqAAguQAAgvAKgqQALgpAWghQAWggAjgSQAigSAvAAQAxAAAiASQAjASAVAgQAWAhALApQAKAqAAAvQAAAugKAqQgLArgWAgQgWAggiASQgiATgxAAQgvAAgigTgAg+iuQgaAQgQAbQgQAbgIAhQgHAjAAAkQAAAjAHAiQAIAjAQAcQAQAbAaAQQAaAQAkABQAlgBAZgQQAagQAQgbQARgcAIgjQAHgiABgjQgBgkgHgjQgIghgRgbQgQgbgagQQgZgQglgBQgkABgaAQg");
	this.shape_3.setTransform(219.6,58.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADLDlIhFmIIhvEpIgeAAQgIAAgFgFQgGgGgEgPIhfkNIhLGGIgtAAIBanJIAlAAQAIAAAEAEQAFAEADAKIBkEeIBxkwIAeAAQAKAAAGAGQAGAFACAOIBNGwg");
	this.shape_4.setTransform(171.225,58.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiNDkIAAnHIEbAAIAAApIjvAAIAACdIDXAAIAAAnIjXAAIAACxIDvAAIAAApg");
	this.shape_5.setTransform(126.95,58.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADLDlIhFmIIhvEpIgeAAQgIAAgFgFQgGgGgEgPIhfkNIhLGGIgtAAIBanJIAlAAQAIAAAEAEQAFAEADAKIBkEeIBxkwIAeAAQAKAAAGAGQAGAFACAOIBNGwg");
	this.shape_6.setTransform(81.625,58.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo51, new cjs.Rectangle(-197,-192.6,786,311.1), null);


(lib.Símbolo50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo42();
	this.instance.setTransform(36.5,43.9,1,1,0,0,0,36.5,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:78.15,y:-10.95},14).to({x:36.5,y:43.9},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-54.8,114.7,142.5);


(lib.Símbolo49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo38();
	this.instance.setTransform(58.5,60,1,1,0,0,0,58.5,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-59.9996,y:59.95},14).to({rotation:0,y:60},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-20.7,157,156);


(lib.Símbolo48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo43();
	this.instance.setTransform(128.1,91.8,1,1,0,0,0,128.1,91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:39.4479,x:128.05,y:91.9},29).to({rotation:0,x:128.1,y:91.8},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-60.4,314.40000000000003,304.59999999999997);


(lib.Símbolo46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo37();
	this.instance.setTransform(76.2,27.9,1,1,0,0,0,76.2,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-44.9994,x:76.25},29).to({rotation:0,x:76.2},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-45.7,152.5,147.3);


(lib.Símbolo45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo36();
	this.instance.setTransform(101,121.5,1,1,0,0,0,101,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-44.9994,y:121.55},19).to({rotation:0,y:121.5},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-17,311.7,295.9);


(lib.Símbolo41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo40();
	this.instance.setTransform(75.7,75.8,1,1,0,0,0,75.7,75.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAIABAAIAJgEIgEAGIgCACIAAABg");
	this.shape.setTransform(94.095,118.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAAIAEgGQAAgBAAAAQAAAAAAAAQABABAAAAQABABAAAAIACACQAAABABABQAAABAAAAQAAAAAAAAQAAABAAAAIgEAHg");
	this.shape_1.setTransform(98.3893,122.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAGIALgSQAAAAAAAAQAAgBABABQAAAAABAAQAAABABAAIACADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgKARg");
	this.shape_2.setTransform(97.6917,120.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAMIAEgHQAAgBABAAQAAAAAAAAQABAAAAABQABAAAAABIACACQAAABABABQAAAAAAABQAAABAAAAQAAAAAAABIgEAHgAgJAAIAKgSQAAgBAAAAQABAAAAABQAAAAABAAQAAABABAAIACADQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgKARg");
	this.shape_3.setTransform(97.8893,120.9357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo41, new cjs.Rectangle(0,0,151.5,151.7), null);


(lib.Símbolo39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(150.2,71.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:208.35},19).to({x:150.2},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358.6,143.4);


(lib.Símbolo35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo21();
	this.instance.setTransform(52.2,53.2,1,1,0,0,0,52.2,53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:51.2389},19).to({rotation:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-20.8,148.3,148.1);


(lib.Símbolo34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo22();
	this.instance.setTransform(40.3,65.3,1,1,0,0,0,40.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:39.1963,x:40.35},39).to({rotation:0,x:40.3},40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-10.7,145,152.2);


(lib.Símbolo33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo26();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-29.9992},34).to({rotation:0},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-93.8,209.6,188);


(lib.Símbolo32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo27();
	this.instance.setTransform(104.1,99.2,1,1,0,0,0,104.1,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:99.1,rotation:-29.9992,y:99.1},14).to({regY:99.2,rotation:0,y:99.2},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-23,278.4,260.2);


(lib.Símbolo31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo24();
	this.instance.setTransform(97.2,66.8,1,1,0,0,0,97.2,66.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:44.9994,x:97.25,y:66.85},29).to({rotation:0,x:97.2,y:66.8},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-44.4,232,222.6);


(lib.Símbolo30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo25();
	this.instance.setTransform(56.1,74.2,1,1,0,0,0,56.1,74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:44.9994},19).to({rotation:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-17.9,184.4,184.4);


(lib.Símbolo29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo23();
	this.instance.setTransform(80.2,44.5,1,1,0,0,0,80.2,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-29.9992},49).to({rotation:0},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-34.1,183.5,157.3);


(lib.Símbolo28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo20();
	this.instance.setTransform(168.8,78.5,1,1,0,0,0,168.8,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:22.4636,y:78.55},24).to({rotation:0,y:78.5},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-58.5,371.8,274);


(lib.Símbolo18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo17();
	this.instance.setTransform(103.8,79,1,1,0,0,0,103.8,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-29.9992,x:103.85},19).to({rotation:0,x:103.8},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-9.3,242.6,208.60000000000002);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B9C9").s().p("AiHFhQgigOgTgkQgTgjAFgyQAEgvAcgzQAcgyAwgtQAFgEAGAAQAFABAFADQAEAFAAAGQAAAHgFAEQhSBOgPBTQBFAxBVAFQBTAFBKgoQBCgjAog9QApg9AJhGQAIhGgYhBQgCgGADgGQACgFAGgCQAGgCAFACQAGADACAFQAcBOgMBOQgMBQgsA/QgtBAhFAlQhNAphXgDQhYgChLgvQABAZALAUQAMAbAbALQAaALAjgHQAEgBAGADQAFACACAIQADAKgLAGIgEABQgPAEgPAAQgaAAgXgKgAkKCaIgWgiQgrhSAFhXQAFhaAthHQAuhIBMgpQA9ggBEgFQBCgGBCAXQAFABAEAGQACAGgDAFQgBAFgFAEQgGADgGgCQg7gUg9AFQg+AEg3AeQhKAogpBFQgoBGgCBNQgCBMAlBFQAFALAFAGIAJAPQAEAFgBAFQgBAHgFADIgCABQgEACgEAAQgGAAgEgGgAgNgIIg8grQgIgEgBgIQgBgJAGgHIAWgbQAHgIAOABIABAAIAtALIAagbIhYgdQgJgEgDgKQgDgJAGgHIABgBIAlglQAGgHAKgBIAEAAIBEANQAGABADAFQAEAFgBAHQgCAGgFADQgFAEgGgCIg/gLIgWAVIBeAgQAIADABAHQACAHgGAHIgvAzQgEAGgKgBIgxgNIgMAPIAzAjQAMAIANgEQAOgDAKgLICji2QAJgHgBgMQgCgHgEgFQgDgDgEgCQgFgBgGACQgGACgKALIgXAaQgEAEgHAAQgHAAgDgEQgFgFAAgGQAAgFAEgFIAXgaQATgVAVgCQAUgDAQAQQAPAMAAAUQACAKgEAMQgFAKgHAJIikC3IgBABQgIAJgMAGQgSAIgQAAQgSAAgPgKg");
	this.shape.setTransform(85.879,86.9282);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyMAQgjgIgVgcIsuwJQgXgdAFgmQAFglAdgXIGplPQAJgHAMACQAMABAHAKQAGAJgBALQgCALgJAHImpFOQgLAJgCAPQgCAOAJAMIMtQIQAKANAPADQAQADANgHQAEgCADgDIJ2nvQAwgmAIg9QAHg9gmgwImuohQgHgKACgLQABgMAKgHQAJgHALACQALABAHAJIGqIdQA1BDgGBPQgDArgUAlQgUAmgiAaIp2HwQgJAHgHADQgWAMgYAAQgKAAgLgCg");
	this.shape_1.setTransform(83.9984,91.2437);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAJIgDgEQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAsgOIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgGAIIgbAKIgDABQgCAAgDgDg");
	this.shape_2.setTransform(105.3107,128.0231);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAIIgDgFQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAjgLIgIANIgSAFIgDABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_3.setTransform(104.5,130.0731);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADgFIADgCIAAAAIgBAEIgFAIIgFADg");
	this.shape_4.setTransform(108.1,129);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAFIgEgFQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAIAJgDIgDAEIgBABIAAABIgCADIAAAAg");
	this.shape_5.setTransform(104.3708,131.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAAIAFgHQAAAAAAAAQAAgBAAABQABAAAAABQABAAABABIABACQADADgBABIgFAHg");
	this.shape_6.setTransform(109.1393,135.4525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAGIAMgTQAAgBAAAAQABAAAAAAQABAAAAABQABAAAAABIACADQADADgCACIgLATg");
	this.shape_7.setTransform(108.3781,133.4136);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPASIAYgnIABgEIADADQAEAFgBACIgZApg");
	this.shape_8.setTransform(107.9438,130.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAcIAAAAIABgCIACgCIAAgBIAdguIABgEIADADQAEAFgBACIgBABIgYAnIgBABIgMAEg");
	this.shape_9.setTransform(106.41,129.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAANIAEgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIACACQACAEgBABIgFAIgAgLAAIAMgUIACgBIABACIACADQADADgCACIgLATg");
	this.shape_10.setTransform(108.5643,134.1167);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhpA6IAIgGIASAVIASgPIACAJIgYATgAg9AXIAHgGQABAAABgBQAAAAABAAQAAAAABAAQAAAAABABIAiAPIgIAHIgHgDIgQAMIACAIIgJAGgAgwApIAKgJIgNgHgAgUABIgOAKIgFgGIAjgaIAEAFIgMAMIAQAUIgHAHgAAIggIAHgGQABAAABAAQAAgBABAAQAAAAABAAQAAABABAAIAiAQIgIAGIgHgDIgQANIACAGIgJAHgAAWgOIAKgIIgPgIgAArg7IAIgHQADgDADACIAQALIgHgVIAIgGIAAgBQADgDADADIAaAUIgIAGIgWgRIAHAVIgIAHQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBgBIgQgLIAMAbIgIAGg");
	this.shape_11.setTransform(120.15,119.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhgA7IACgBIACAAIAVAKIgCACIgGgDIgLAJIACAGIgDACgAhaBIIAIgGIgLgFgAhJApIADgCIAOARIgCACgAg4AbIAJgHQAIgHAFAGQADAEgDAFIAJAEIgDACIgIgDIgCACIgGADIAFAHIgDACgAgsAWIgIAFIAGAHQAEgBACgCQAGgFgDgFIgDgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABgAgbAEIADgCIAMAPIAKgIIACADIgNAKgAgEgNIADgDIANASIgDACgAAMgaIACgCIACAAIAWAEIgLgOIADgCIAOARIgCACIgCAAIgXgEIALAOIgCACgAAsgzIANgMIACADIgLAJIAEAEIAKgIIACADIgKAIIAEAGIAMgJIACACIgOALgABSg7QAEgBAEgDQAEgEgBgCQgCgDgFADIgCABQgHAEgDgEQgEgFAIgHIAAABQADgDAEgBIABACIgGAEQgFADACADQABADAFgDIACgBQAHgEADAEQAFAFgJAGQgEADgEACg");
	this.shape_12.setTransform(123.7529,123.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgogPIAoggIAIANIgaAWIAHALIAYgUIAJANIgYATIAHANIAbgWIAJAOIgoAgg");
	this.shape_13.setTransform(78.775,26.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJgGIgRAJIgJgKIAsgjIAIALIgOAPIAhAwIgOAMg");
	this.shape_14.setTransform(72.85,29.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrgUIASgOQAIgGAHgBQAHgCAEADQAHACAEAFQAFAHABAHQACAHgCAHIAaAMIgOALIgWgLIAAACIgCACIgEABIgCACIAMASIgMALgAgJgZQgEAAgDADIgFAEIANATIADgBIACAAQAEgEAAgGQABgFgCgGIgFgDIgDgBIgBAAg");
	this.shape_15.setTransform(68.9,34.9469);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAjQgIgFgHgIQgEgGgDgHIgEgNQAAgHADgHQADgHAIgGQAIgGAHgBQAIgBAHAEQAIAEAFAHQAGAHADAIQAEAHAAAGQABAIgDAHQgDAHgHAFQgIAHgIABQgIAAgIgEgAgMgSQgEADgBAGQgBAEACAFQABAGAFAFQAEAGAFACQADADAFgBQAEAAADgCQAEgEAAgEQABgGgCgFIgHgLQgGgIgFgBIgDgBQgEAAgEADg");
	this.shape_16.setTransform(62.9611,39.015);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfgUIASgOQAIgGAGgCQAHgBAGACQAGADAFAFQAGAIABAIQAAAJgDAHQgEAGgHAGIgCACIgDACIALARIgNALgAgEgWIgFAEIAOAUIACgBIABgBQAGgEAAgFQACgGgFgGQgBgCgDgBQgCgBgDAAQgCAAgEADg");
	this.shape_17.setTransform(56.1786,44.1083);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkgiIAJgHQAEgDAEAAQADABADACIAyAtIgPAMIgMgMIgOAMIAEARIgNAMgAgJACIAKgHIgTgTg");
	this.shape_18.setTransform(52.575,48.7714);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAeQAEAAADgDQAEgBAEgDIAGgHIACgFIgCgEQgCgCgDgBIgGACIgHADQgIAEgHgCQgHgBgEgFQgEgFgBgHQAAgHAEgHQADgHAIgGIALgHIAHgDIAFAOIgHAEIgHAEQgFAEgCAEQgBAEACADQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQACAAAEgCIAFgCQAJgEAHABQAHABAFAGQAEAFABAHQABAGgEAIQgDAHgJAHQgGAFgFACIgJADg");
	this.shape_19.setTransform(46.31,52.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkgiIAJgHQAEgDAEAAQADABADACIAyAtIgPAMIgMgMIgOAMIAEARIgNAMgAgJACIAKgHIgTgTg");
	this.shape_20.setTransform(42.075,57.1214);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfgUIASgOQAIgGAGgCQAHgBAGACQAGADAFAFQAGAIABAIQAAAJgDAHQgEAGgHAGIgCACIgDACIALARIgNALgAgEgWIgFAEIAOAUIACgBIABgBQAGgEAAgFQACgGgFgGQgBgCgDgBQgCgBgDAAQgCAAgEADg");
	this.shape_21.setTransform(35.2786,60.7083);

	this.instance = new lib.ClipGroup_1_1();
	this.instance.setTransform(476.3,-235.7,1,1,0,0,0,476.3,685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(0,-920.7,952.6,1370.1), null);


(lib.Símbolo12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(195.95,-37.05,1,1,0,0,0,393,155.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACLDlIg6igIiiAAIg6CgIgxAAICtnJIAPAAQAJgBAEADQAFAEAEAJICnG6gABEAfIhEi9IhDC9ICHAAg");
	this.shape.setTransform(274.175,58.5214);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_1.setTransform(245.275,58.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAADnQgJAAgEgEQgFgEgDgIIinm9IAZAAQANAAAIAGQAJAHAFAMICBFoICLmBIAxAAIitHNg");
	this.shape_2.setTransform(215.95,59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_3.setTransform(186.725,58.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABuDkIhmibIgVACIgZABQgWAAgTgDQgUgCgRgGIAACjIgsAAIAAnHICaAAQA6ABAjAUQAjATAPAgQAPAfgBAlQAAAggKAdQgLAcgVAXQgWAXgjANIBtCngAh0AWQASAGAUAEQAUADAWAAQA4AAAegTQAfgSALgcQAMgdgBgcQABgXgJgWQgIgXgXgPQgXgPgqgBIhzAAg");
	this.shape_4.setTransform(159.475,58.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVDkIAAmbIiHgKIAAgiIE5AAIAAAiIiHAKIAAGbg");
	this.shape_5.setTransform(120.275,58.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(-197,-192.6,786,311.1), null);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Símbolo51();
	this.instance.setTransform(0.1,199.9,1,1,0,0,0,196,-37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.Símbolo12();
	this.instance_1.setTransform(0.1,0.75,1,1,0,0,0,196,-37.1);

	this.instance_2 = new lib.ClipGroup_1_2();
	this.instance_2.setTransform(-0.1,-7.3,1,1,0,0,0,392.9,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,-170.9,789.9,526.4);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(420,477.8,1,1,0,0,0,420,477.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,840.1,955.7), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKaBrCMAAAjWDMCU1AAAMAAADWDg");
	mask.setTransform(476.3,685.025);

	// Capa_3
	this.instance = new lib.Group();
	this.instance.setTransform(461.7,561.15,1,1,0,0,0,420,477.8);
	this.instance.alpha = 0.1484;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AYtJJMgxZAAAQidAAhvhvQhuhuAAidIAAmdQAAicBuhvQBvhvCdAAMAxZAAAQCdAABuBvQBvBvAACcIAAGdQAACdhvBuQhuBvidAAg");
	this.shape.setTransform(463.275,1310.075);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(41.7,83.4,840.0999999999999,1286.6999999999998), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(143.8,10.8,1,1,0,0,0,195.3,60.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(-51.5,-49.4,390.7,120.4), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.instance_1 = new lib.Símbolo35();
	this.instance_1.setTransform(253.5,278.3,1,1,0,0,0,52.2,53.2);

	this.instance_2 = new lib.Símbolo34();
	this.instance_2.setTransform(403.55,170.7,1,1,0,0,0,40.3,65.3);

	this.instance_3 = new lib.Símbolo33();
	this.instance_3.setTransform(986.75,264.25,1,1,0,0,0,93.8,47.1);

	this.instance_4 = new lib.Símbolo32();
	this.instance_4.setTransform(1034.1,99.2,1,1,0,0,0,104.1,99.2);

	this.instance_5 = new lib.Símbolo31();
	this.instance_5.setTransform(640.85,216.35,1,1,0,0,0,97.2,66.8);

	this.instance_6 = new lib.Símbolo30();
	this.instance_6.setTransform(794.15,77.55,1,1,0,0,0,56.1,74.2);

	this.instance_7 = new lib.Símbolo29();
	this.instance_7.setTransform(529.15,56.95,1,1,0,0,0,80.2,44.5);

	this.instance_8 = new lib.Símbolo28();
	this.instance_8.setTransform(168.8,79.7,1,1,0,0,0,168.8,78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,1138.4,331.5), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhUXCWAMAAAkr/MCovAAAMAAAEr/g");
	mask_1.setTransform(1116.55,996);

	// Capa_3
	this.instance = new lib.ClipGroup_1_3();
	this.instance.setTransform(1116.5,996,1,1,0,0,0,1116.5,996);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(576.6,36,1080,1920), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.instance_9 = new lib.ClipGroup_0_1();
	this.instance_9.setTransform(1112.5,996,1,1,0,0,0,1116.5,996);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(-4,0,2233.1,1992), null);


(lib.Símbolo47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo41();
	this.instance.setTransform(75.7,75.8,1,1,0,0,0,75.7,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:53.2081},24).to({rotation:0},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-25.9,209.4,207.8);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo14();
	this.instance.setTransform(476.3,-235.7,1,1,0,0,0,476.3,-235.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(0,-920.7,952.6,1370.1), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo50();
	this.instance.setTransform(652.95,208.75,1,1,0,0,0,36.5,43.9);

	this.instance_1 = new lib.Símbolo49();
	this.instance_1.setTransform(280.3,61.75,1,1,0,0,0,58.5,60);

	this.instance_2 = new lib.Símbolo48();
	this.instance_2.setTransform(878.7,218.2,1,1,0,0,0,128.1,91.8);

	this.instance_3 = new lib.Símbolo47();
	this.instance_3.setTransform(590.55,82.65,1,1,0,0,0,75.7,75.8);

	this.instance_4 = new lib.Símbolo46();
	this.instance_4.setTransform(76.2,27.85,1,1,0,0,0,76.2,27.9);

	this.instance_5 = new lib.Símbolo45();
	this.instance_5.setTransform(103.45,195,1,1,0,0,0,101,121.5);

	this.instance_6 = new lib.Símbolo44();
	this.instance_6.setTransform(901.95,48.65,1,1,0,0,0,37.1,47.5);

	this.instance_7 = new lib.Símbolo39();
	this.instance_7.setTransform(400.2,234.05,1,1,0,0,0,150.2,71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,1006.8,316.5), null);


(lib.Símbolo19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo16();
	this.instance.setTransform(476.3,-235.7,1,1,0,0,0,476.3,-235.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.9992,x:535.8,y:-116.65},14).to({rotation:0,x:476.3,y:-235.7},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-920.7,1274.7,1589);


(lib.Símbolo13copia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgMgMAAgSQAAgSAMgNQANgMARAAQASAAANAMQAMANAAASQAAASgMAMQgNAMgSAAQgRAAgNgMg");
	this.shape.setTransform(813.725,733.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQC6QgdgHgVgKIAPgtQARAJAZAHQAYAGAiABQAoAAAUgLQAWgLAHgOQAHgPgBgNQABgXgQgQQgSgRgngLIgYgHQg2gMgdgYQgbgXgBgqQAAgZAPgWQAOgYAfgOQAfgPAvgBQAgAAAaAFQAaAGAYALIgQAtQgSgIgXgGQgVgGgfAAQghAAgTAIQgUAJgIAMQgIANAAANQAAAWASAOQARANAnAKIAXAGQA6AQAbAZQAbAZAAAnQAAAdgOAaQgPAaggARQghAQg0ABQgkgBgdgHg");
	this.shape_1.setTransform(785.6,718.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAXQAgAYAOApQAOAnAAAzIAAAbIj5AAQABAjAMAfQANAeAaATQAaATAqABQAhgBAYgFQAagEAUgLIAQApQgbAOgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAPgLAbQgMAbgDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgQgjAAQghgBgWARg");
	this.shape_2.setTransform(749.625,718.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTETQgRgHgKgPQgKgPgBgbIAAnsIA0AAIAAHrQAAAPAGAHQAJAGAPAAIAMgBQAHgBAFgEIAJApQgJAFgLACQgLACgKAAQgSAAgSgHg");
	this.shape_3.setTransform(723.3,709.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQCzQgdgOgSgbQgSgbAAglQAAgmASgcQATgaAegPQAdgPAkAAQApAAAbAQQAbAPAMAXIAAgzQAAgcgJgXQgIgXgVgMQgWgOglAAQgfAAgXAGQgYAFgTAIIgNgvQAZgJAdgGQAdgFAbAAQA3AAAhASQAhARAOAfQAOAfAAApIAADxIgtAAIgEgmQgNARgcAOQgdAOgoABQgkAAgfgPgAhDAQQgYAUgBAkQABAiAZAVQAZAVAqABQAaAAAagNQAagNAQgVIAAgDQgBgvgbgcQgagcgvAAQglAAgYAUg");
	this.shape_4.setTransform(691.4009,718.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPC+IAAlzIAYAAQAIAAAEADQAFADABAIIAGAfQAMgRARgMQASgMATgGQAUgGASAAQBBAAAjAlQAjAkAABDIAADvIg0AAIAAjnQAAg4gZgXQgZgYgoABQgVAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_5.setTransform(652.975,718.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhQCzQgdgOgSgbQgSgbAAglQAAgmASgcQATgaAegPQAdgPAkAAQApAAAbAQQAbAPAMAXIAAgzQAAgcgJgXQgIgXgVgMQgWgOglAAQgfAAgXAGQgYAFgTAIIgNgvQAZgJAdgGQAdgFAbAAQA3AAAhASQAhARAOAfQAOAfAAApIAADxIgtAAIgEgmQgNARgcAOQgdAOgoABQgkAAgfgPgAhDAQQgYAUgBAkQABAiAZAVQAZAVAqABQAaAAAagNQAagNAQgVIAAgDQgBgvgbgcQgagcgvAAQglAAgYAUg");
	this.shape_6.setTransform(612.7009,718.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkEC+IAAlzIAYAAQAIAAAFADQAEADABAIIAGAfQAMgRARgMQASgMATgGQAVgGASAAQAuAAAfASQAeATAPAjQAIgYASgQQATgQAXgIQAWgIAWAAQBBAAAjAlQAhAkABBDIAADvIg0AAIAAjnQgBg4gYgXQgZgYgnABQgWAAgVAKQgVAKgOAWQgOAXAAAlIAADnIgzAAIAAjnQgBg4gagXQgZgYgnABQgWAAgWAKQgVAKgOAWQgPAXAAAlIAADng");
	this.shape_7.setTransform(562.6,718.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAXQAgAYAOApQAOAnAAAzIAAAbIj5AAQABAjAMAfQANAeAaATQAaATAqABQAhgBAYgFQAagEAUgLIAQApQgbAOgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAPgLAbQgMAbgDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgQgjAAQghgBgWARg");
	this.shape_8.setTransform(511.775,718.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQC6QgdgHgVgKIAPgtQARAJAZAHQAYAGAiABQAoAAAUgLQAWgLAHgOQAHgPgBgNQABgXgRgQQgRgRgngLIgYgHQg2gMgdgYQgcgXAAgqQAAgZAPgWQAOgYAfgOQAegPAwgBQAgAAAaAFQAaAGAXALIgPAtQgSgIgXgGQgWgGgeAAQghAAgUAIQgTAJgIAMQgIANAAANQAAAWARAOQASANAnAKIAXAGQA6AQAcAZQAbAZAAAnQAAAdgPAaQgOAaghARQggAQg1ABQgkgBgdgHg");
	this.shape_9.setTransform(475.35,718.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_10.setTransform(420.325,718.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhOC1QghgQgWgbQgVgcgKgjQgKgkAAgnQAAglAKgkQAKgkAVgcQAWgbAhgQQAhgQAtAAQAuAAAhAQQAiAQAVAbQAVAcAKAkQAKAkAAAlQAAAngKAkQgKAjgVAcQgVAbgiAQQghAQguAAQgtAAghgQgAgohMQgPAZAAAzQAAA1APAZQAPAYAZAAQAaAAAPgYQAPgZAAg1QAAgzgPgZQgPgZgaAAQgZAAgPAZg");
	this.shape_11.setTransform(382.725,718.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5D+QgdgdAAg4IAAnCIB1AAIAAG7QAAAKAGAHQAGAHAPAAIAKAAQAFgBACgBIAMBZQgLAEgQADQgQADgJAAQhAAAgcgdg");
	this.shape_12.setTransform(353.775,709.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag6C1QgmgPgYgbQgYgbgMgkQgMgkAAgoQAAglAKgkQAKgkAVgcQAWgbAhgQQAhgQAtAAQBYAAAlA5QAlA3AABTIAAAXIjYAAQADAqAUATQAUATAtABQAjgBAYgHQAZgIATgLIAaBVQgbAPgiAKQghALgvAAQgxAAglgQgAA2gvQgCgUgLgQQgMgRgXgBQgRAAgOANQgOANgGAcIBjAAIAAAAg");
	this.shape_13.setTransform(321.275,718.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiQCXQgdgpABg8IAAjxIB3AAIAADgQAAAhAQAOQAPAPAWAAQAUAAARgPQARgOAAghIAAjgIB3AAIAAF0IhdAAIgJg6QgPAbgfAVQgfAUgqABQhDAAgdgpg");
	this.shape_14.setTransform(281.3,719.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRC9QgTAAgKgGQgIgGgHgSIiAlbIBbAAQASAAAKAGQAJAHAEAQIA5DJIBCjmIB8AAIiLF5g");
	this.shape_15.setTransform(240.4,719.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag5D+QgdgdAAg4IAAnCIB1AAIAAG7QAAAKAGAHQAGAHAPAAIAKAAQAFgBACgBIAMBZQgLAEgQADQgQADgJAAQhAAAgcgdg");
	this.shape_16.setTransform(195.075,709.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6EUIAAl0IB2AAIAAF0gAguigQgUgUABgcQgBgcAUgTQASgUAcAAQAbAAAUAUQATATABAcQgBAcgTAUQgUASgbABQgcgBgSgSg");
	this.shape_17.setTransform(172.05,709.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACnDAIAAjgQAAghgPgOQgQgOgVAAQgVAAgQAOQgQAOAAAhIAADgIh3AAIAAjgQAAghgQgOQgQgOgWAAQgVAAgRAOQgQAOAAAhIAADgIh4AAIAAl0IBFAAQALAAAFAEQAFADADAKIAIAcQARgYAegQQAegQAmAAQAqAAAbAQQAcAPAOAaQARgXAegRQAdgRAmAAQBHAAAdApQAeApAAA8IAADxg");
	this.shape_18.setTransform(129.875,718.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAXQAgAYAOAoQAOApAAAxIAAAcIj5AAQABAjAMAfQANAeAaATQAaATAqAAQAhAAAYgEQAagGAUgKIAQApQgbANgcAHQgcAGgkAAQg8gBgmgagAgyiDQgVARgLAaQgMAbgDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgQgjAAQghAAgWAPg");
	this.shape_19.setTransform(773.925,619.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhUEBQgigZgSgrQgSgqAAg1QABg5ATgrQAUgtAkgaQAkgaAwgBQAaAAAbAKQAbAJASASIAAjXIAyAAIAAItIgtAAIgEgsQgQAXgdAOQgcAPghAAQgxgBgigZgAgzgkQgaAWgMAhQgMAiAAApQAAAiAKAhQALAgAXAWQAYAVAlABQAXAAAWgKQAXgKAPgYQAPgWABgnIAAiWQgNgOgWgMQgYgNgfAAQgnAAgZAVg");
	this.shape_20.setTransform(733.3,610.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhQC7QgdgIgVgKIAPgsQARAHAZAIQAYAGAiABQAogBAUgKQAWgLAHgOQAHgPgBgNQABgXgQgQQgSgRgngKIgYgIQg2gMgdgXQgcgYAAgpQAAgaAPgXQAOgWAfgPQAfgPAvgBQAgAAAaAFQAaAHAYAKIgQAtQgSgIgXgGQgVgHgfABQghgBgTAJQgUAJgIANQgIANAAANQAAAVASAOQARANAnAJIAXAHQA6AQAbAZQAcAZgBAnQAAAdgOAaQgPAaggARQghAQg0ABQgkgBgdgGg");
	this.shape_21.setTransform(676.7,619.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhQD1QgdgOgSgbQgSgbAAglQAAgmASgbQATgcAegPQAdgOAkgBQApABAbAPQAbAQAMAXIAAg0QAAgbgJgXQgIgWgVgNQgWgOglAAQgfAAgXAGQgYAFgTAIIgNgvQAZgJAdgFQAdgGAbAAQA3ABAhARQAhARAOAfQAOAfAAApIAADyIgtAAIgEgnQgNASgcAOQgdAOgoAAQgkAAgfgPgAhDBSQgYAVgBAjQABAjAZAUQAZAWAqAAQAaAAAagNQAagNAQgVIAAgCQgBgwgbgcQgagdgvAAQglAAgYAVgAgjipIBUhaIBJAAIhtBag");
	this.shape_22.setTransform(639.6009,613.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkEC+IAAlzIAYAAQAIAAAFADQAEADABAIIAHAfQALgRARgMQASgMATgGQAVgGASAAQAuAAAfASQAeATAPAjQAIgYASgQQATgQAXgIQAWgIAWAAQBBAAAjAlQAhAkABBDIAADvIg0AAIAAjnQgBg4gYgXQgZgYgnABQgWAAgVAKQgVAKgOAWQgOAXAAAlIAADnIgzAAIAAjnQgBg4gZgXQgagYgnABQgWAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_23.setTransform(589.5,619.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhAERQgdgJgagPIAQgsQATAMAYAIQAXAJAhAAQAlgBAUgOQAVgNAJgYQAIgYAAgeIAAhQQgSAZgcANQgbANgZAAQhAgBgiglQgigkAAhCIAAjvIA0AAIAADnQABA3AXAYQAYAXAmgBQAUABAVgLQAVgJANgWQAOgWAAgmIAAjnIA0AAIAAGfQABArgOAhQgOAhghASQgfATg1AAQgdAAgfgIg");
	this.shape_24.setTransform(517.95,629.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_25.setTransform(460.475,619.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag6C1QgmgPgYgbQgYgbgMgkQgMgkAAgoQAAgmAKgjQAKgkAVgbQAWgcAhgQQAhgQAtAAQBYAAAlA4QAlA5AABSIAAAWIjYAAQADArAUATQAUATAtAAQAjAAAYgHQAZgIATgMIAaBWQgbAPgiALQghAKgvAAQgxAAglgQgAA2gvQgCgUgLgQQgMgSgXABQgRgBgOANQgOANgGAcIBjAAIAAAAg");
	this.shape_26.setTransform(423.025,619.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag5D+QgdgdAAg4IAAnCIB1AAIAAG7QAAAKAGAHQAGAHAPAAIAKAAQAFgBACgCIAMBaQgLAEgQADQgQACgJAAQhAAAgcgcg");
	this.shape_27.setTransform(394.675,610.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiDChQggglAAgwQAAg8AngiQAngiA5gBQAfABAWAKQAWAMAMAPIAAgEQAAgjgRgVQgQgXgvAAQgeAAgXAJQgYAKgSALIgXhhQAbgPAmgIQAngIAeAAQBfAAAlAuQAlAuAABHIAADcIhcAAIgJgrQgLAVgbAQQgZAQgmAAQg9AAgggkgAggAiQgPAMAAAWQAAAVAPANQAQANAWAAQAOAAAPgFQAOgEAKgKQgBgggQgVQgQgVgagBQgRAAgPANg");
	this.shape_28.setTransform(361.925,619.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA2DAIAAjgQAAghgQgOQgPgOgXAAQgUAAgRAOQgQAOAAAhIAADgIh3AAIAAl0IBEAAQAMAAAEAEQAGADACAKIAIAcQASgYAdgQQAdgQAmAAQBIAAAdApQAeApAAA8IAADxg");
	this.shape_29.setTransform(322.8,619.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhOC1QghgQgWgcQgVgbgKgkQgKgkAAgmQAAgmAKgjQAKgkAVgbQAWgcAhgQQAhgQAtAAQAuAAAhAQQAiAQAVAcQAVAbAKAkQAKAjAAAmQAAAmgKAkQgKAkgVAbQgVAcgiAQQghAQguAAQgtAAghgQgAgohMQgPAZAAAzQAAA1APAZQAPAXAZAAQAaAAAPgXQAPgZAAg1QAAgzgPgZQgPgZgaABQgZgBgPAZg");
	this.shape_30.setTransform(281.875,619.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag6EUIAAlzIB2AAIAAFzgAgvigQgSgUgBgcQABgcASgTQAUgUAbAAQAcAAATAUQAUATAAAcQAAAcgUAUQgTASgcABQgbgBgUgSg");
	this.shape_31.setTransform(251.9,610.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhcCPQg0g3AAhYQAAhXA0g2QA0g3BdAAQAdAAAYAGQAWAGARAKIgVBgQgOgHgPgEQgQgEgSAAQglAAgYAWQgaAXAAAwQAAAxAaAXQAYAWAlAAQASAAAQgFQAPgEAOgGIAVBhQgRAKgWAFQgYAGgdAAQhdAAg0g2g");
	this.shape_32.setTransform(225.3,619.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiDChQggglAAgwQAAg8AngiQAngiA5gBQAfABAWAKQAWAMAMAPIAAgEQAAgjgRgVQgQgXgvAAQgeAAgXAJQgYAKgSALIgXhhQAbgPAmgIQAngIAeAAQBfAAAlAuQAlAuAABHIAADcIhcAAIgJgrQgLAVgbAQQgZAQgmAAQg9AAgggkgAggAiQgPAMAAAWQAAAVAPANQAQANAWAAQAOAAAPgFQAOgEAKgKQgBgggQgVQgQgVgagBQgRAAgPANg");
	this.shape_33.setTransform(188.625,619.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA2DAIAAjgQAAghgQgOQgQgOgVAAQgVAAgRAOQgQAOAAAhIAADgIh4AAIAAl0IBFAAQALAAAGAEQAEADAEAKIAHAcQARgYAegQQAdgQAmAAQBHAAAfApQAeApAAA8IAADxg");
	this.shape_34.setTransform(149.5,619.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_35.setTransform(786.825,520.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhOC1QghgQgWgcQgVgagKglQgKgkAAgmQAAgmAKgjQAKgkAVgbQAWgcAhgQQAhgQAtAAQAuAAAhAQQAiAQAVAcQAVAbAKAkQAKAjAAAmQAAAmgKAkQgKAlgVAaQgVAcgiAQQghAQguAAQgtAAghgQgAgohMQgPAYAAA0QAAA1APAYQAPAYAZAAQAaAAAPgYQAPgYAAg1QAAg0gPgYQgPgYgaAAQgZAAgPAYg");
	this.shape_36.setTransform(749.225,520.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AA2DAIAAjgQAAghgQgOQgPgOgXAAQgUAAgRAOQgQAOAAAhIAADgIh4AAIAAl0IBFAAQALAAAGAEQAEADADAKIAIAcQASgYAdgQQAdgQAmAAQBHAAAeApQAfApAAA8IAADxg");
	this.shape_37.setTransform(708.65,519.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag7EUIAAlzIB2AAIAAFzgAgvihQgTgTAAgcQAAgcATgTQAUgUAbAAQAcAAATAUQAUATgBAcQABAcgUATQgTAUgcAAQgbAAgUgUg");
	this.shape_38.setTransform(677.35,511.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqDPQghgjAAhGIAAiRIg8gPIAAhMIA8AAIAAhrIB2AAIAABrIBdAAIAABSIhdAOIAACDQAAAZAKAOQAKAOAbAAQAJAAAIgCIAMgEIALBcQgNAFgTADQgTACgNAAQhMAAgggjg");
	this.shape_39.setTransform(651.7,515.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_40.setTransform(619.125,520.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag6C1QgmgPgYgbQgYgbgMgkQgMgkAAgoQAAgmAKgjQAKgkAVgbQAWgcAhgQQAhgQAtAAQBYAAAlA4QAlA4AABTIAAAWIjYAAQADArAUATQAUATAtAAQAjABAYgJQAZgHATgMIAaBWQgbAPgiALQghAKgvAAQgxAAglgQgAA2gwQgCgSgLgSQgMgQgXAAQgRAAgOAMQgOANgGAbIBjAAIAAAAg");
	this.shape_41.setTransform(581.675,520.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AiLDtQgmgwgBhkQAAhaArg1QAqg2BLAAQAaAAAVAJQAWAIANAMIAAjNIBzAAIAAIuIhnAAIgJgzQgPAZgcASQgbATgjAAQg9AAgogwgAgrAPQgQAbgBAsQABAvAPAbQAPAcAhAAQAXAAAQgQQAQgQABgeIAAhoQgGgKgOgMQgOgKgXAAQgdAAgRAZg");
	this.shape_42.setTransform(540.85,511.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiMDjQg2goAAhFQAAgmAWgiQAWgjAwgPQglgTgTgeQgTgcAAgsQAAg9AygoQAxgpBOAAQBPAAAxAnQAxAnAAA8QAAAmgSAaQgTAZgfAOQAsAYAVAhQAVAkAAAqQAABKg2ArQg2AqhXAAQhXAAg1gpgAg/A8QgPAVAAAVQAAAgAXATQAWAUAhAAQAjAAAXgTQAXgSAAgdQAAgfgVgQQgUgQgmgKIgHgDIgEgBIgDgBQgjAJgQAWgAgpigQgRAQAAAaQAAAZAUAPQATAQAmAIIAEAAQASgKAJgQQAIgQAAgTQAAgbgRgRQgQgRgZAAQgZAAgQAQg");
	this.shape_43.setTransform(481.975,513.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AiwEHIAAhtIB2AAIAAkUIhwAxIAAh0IB7g5QATgIASgEQARgEAVAAIAfAAIAAGgIB2AAIAABtg");
	this.shape_44.setTransform(437.3,512.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhQC7QgdgIgVgKIAPgsQARAHAZAHQAYAIAiAAQAoAAAUgLQAWgKAHgPQAHgPgBgNQABgXgQgQQgSgRgngKIgYgHQg2gNgdgXQgbgYgBgpQAAgZAPgYQAOgXAfgOQAfgPAvgBQAgAAAaAGQAaAFAYAMIgQAsQgSgIgXgGQgVgHgfAAQghAAgTAJQgUAJgIANQgIANAAANQAAAVASAOQARAMAnAKIAXAHQA6AQAcAYQAaAaAAAnQAAAdgOAaQgPAaggAQQghARg0ABQgkgBgdgGg");
	this.shape_45.setTransform(377.9,520.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhXCmQgjgbgRgrQgRgsAAg0QAAg0ARgrQARgsAjgbQAigaA1gBQA2ABAiAaQAjAbARAsQARArAAA0QAAA0gRAsQgRArgjAbQgiAbg2ABQg1gBgigbgAg9h9QgYAVgJAiQgKAhABAlQgBAmAKAiQAJAhAYAVQAWAVAnAAQAnAAAXgVQAXgVAJghQALgigBgmQABglgLghQgJgigXgVQgXgVgngBQgnABgWAVg");
	this.shape_46.setTransform(341.1,520.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AheC+IAAlzIAZAAQAIAAAEADQAEADACAIIAIAvQAJgXAQgPQAQgPASgIQATgIATAAQALAAAKACQAKABAKAFIgLA5QgIgFgKgCQgJgCgLAAQgWAAgUAKQgTALgNAYQgNAYAAAoIAADWg");
	this.shape_47.setTransform(312.225,520.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAKDrQgZgMgQgcQgQgbAAgvIAAjSIhLgLIAAghIBLAAIAAhwIAzAAIAABwIBzAAIAAAmIhzAIIAADNQAAAuASATQARAUAiAAQAKAAAKgDQAKgCAJgEIALAoQgMAGgPADQgPADgPAAIgDAAQgdAAgYgLg");
	this.shape_48.setTransform(282.7,515.326);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhPC7QgdgIgXgKIAQgsQARAHAZAHQAZAIAhAAQAnAAAWgLQAVgKAHgPQAHgPAAgNQAAgXgQgQQgSgRgngKIgYgHQg2gNgcgXQgcgYgBgpQAAgZAOgYQAPgXAfgOQAfgPAvgBQAgAAAaAGQAaAFAYAMIgQAsQgTgIgVgGQgWgHgfAAQghAAgTAJQgUAJgIANQgIANAAANQAAAVASAOQARAMAmAKIAYAHQA6AQAbAYQAbAaAAAnQAAAdgOAaQgPAaggAQQggARg1ABQgkgBgcgGg");
	this.shape_49.setTransform(251.75,520.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhMCmQgmgagTgsQgRgsAAg0QAAgzAQgsQARgsAjgbQAjgaA0gBQA2ABAgAXQAgAYAOAoQAOAoAAAyIAAAcIj5AAQABAjAMAfQANAeAaATQAaATAqAAQAhAAAYgEQAagGAUgKIAQAoQgbAOgcAHQgcAGgkAAQg8gBgmgbgAgyiDQgVAQgLAbQgMAbgDAfIDEAAIAAgDQAAgegJgZQgJgagVgQQgUgQgjgBQghAAgWAQg");
	this.shape_50.setTransform(215.775,520.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhsCYQgjgkAAhCIAAjvIA0AAIAADnQABA3AZAYQAZAXAngBQAVABAWgLQAVgJAPgWQAOgXAAglIAAjnIA0AAIAAFzIgrAAIgFgtQgMARgRAMQgRAMgUAGQgUAGgSAAQhBAAgjgmg");
	this.shape_51.setTransform(176.225,520.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AiPC+IAAlzIAYAAQAIAAAEADQAFADABAIIAGAfQAMgRARgMQASgMATgGQAUgGASAAQBBAAAjAlQAjAkAABDIAADvIg0AAIAAjnQAAg4gZgXQgZgYgoABQgVAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_52.setTransform(136.475,520.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhMCmQgmgagTgsQgRgsAAg0QAAgzAQgsQARgsAjgbQAjgaA0gBQA2ABAgAYQAgAXAOApQAOAnAAAzIAAAbIj5AAQABAjAMAeQANAfAaATQAaATAqAAQAhABAYgGQAagEAUgLIAQAoQgbAOgcAGQgcAHgkAAQg8gBgmgbgAgyiDQgVAQgLAcQgMAagDAfIDEAAIAAgDQAAgegJgZQgJgagVgQQgUgRgjAAQghABgWAPg");
	this.shape_53.setTransform(773.475,421.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AheC+IAAlzIAZAAQAIAAAEADQAEADACAIIAIAvQAJgXAQgPQAQgPASgIQATgIATAAQALAAAKACQAKABAKAFIgLA5QgIgFgKgCQgJgCgLAAQgWAAgUAKQgTALgNAYQgNAYAAAoIAADWg");
	this.shape_54.setTransform(745.125,420.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhlERQgfgKgWgNIAAoUIAzAAIAAD0QAPggAfgRQAegRAhAAQAzABAhAYQAhAYAQApQAQAoAAAxQAAA8gUAuQgUAvgoAbQgoAbg8ABQgtAAgfgKgAgvgsQgYAOgPAeQgPAeAAAzIAACLQANAIAVAEQAVAFAcAAQAsgBAagXQAbgYAMglQAMgkgBgpQABgggJgfQgJgdgWgUQgWgUgoAAIgBAAQgZAAgWANg");
	this.shape_55.setTransform(710.175,412.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhsCYQgjgkAAhCIAAjvIA0AAIAADnQABA4AZAWQAZAYAngBQAVABAWgKQAVgKAPgXQAOgWAAglIAAjnIA0AAIAAFzIgrAAIgFgtQgMARgRAMQgRAMgUAGQgUAGgSAAQhBAAgjgmg");
	this.shape_56.setTransform(668.675,421.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag7CmQgmgbgSgrQgSgsAAg0QAAgzASgsQASgsAmgbQAlgaA7gBQAYAAAZAFQAZAEAWAJIgOAsQgRgHgTgEQgUgFgbAAQgqABgaAVQgaAVgMAiQgMAhABAlQgBAmAMAiQAMAhAaAVQAaAVAqAAQAcABAUgEQAVgFAQgHIANArQgXAJgZAFQgZAFgYAAQg7gBglgbg");
	this.shape_57.setTransform(633.15,421.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhQC6QgcgHgXgLIAQgsQARAJAZAGQAYAIAiAAQAngBAVgKQAWgKAHgPQAHgPAAgNQAAgXgRgQQgRgRgngLIgYgGQg2gNgcgXQgdgYAAgqQAAgZAOgWQAPgYAfgOQAegPAwgBQAgAAAaAGQAaAFAXAMIgPAsQgTgIgVgGQgXgGgegBQghAAgUAJQgTAJgIANQgIAMAAANQAAAWARANQASANAmALIAYAGQA6AQAcAYQAbAaAAAnQAAAdgPAaQgOAaghAQQggARg1ABQgkAAgdgIg");
	this.shape_58.setTransform(598.45,421.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhMCmQgmgagTgsQgRgsAAg0QAAgzAQgsQARgsAjgbQAjgaA0gBQA2ABAgAYQAgAXAOApQAOAnAAAzIAAAbIj5AAQABAjAMAeQANAfAaATQAaATAqAAQAhABAYgGQAagEAUgLIAQAoQgbAOgcAGQgcAHgkAAQg8gBgmgbgAgyiDQgVAQgLAcQgMAagDAfIDEAAIAAgDQAAgegJgZQgJgagVgQQgUgRgjAAQghABgWAPg");
	this.shape_59.setTransform(562.475,421.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhUEBQgigZgSgrQgRgqAAg1QgBg5AVgrQATgtAkgaQAjgaAwgBQAbAAAbAKQAbAJASASIAAjXIAyAAIAAItIgtAAIgFgsQgQAXgcAOQgcAPghAAQgxgBgigZgAgzgkQgaAWgMAhQgNAiAAApQAAAiALAhQAKAgAYAWQAXAVAlABQAXAAAXgKQAWgKAPgYQAQgWAAgnIAAiWQgMgOgXgMQgXgNgfAAQgnAAgZAVg");
	this.shape_60.setTransform(521.85,412.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ag/EQQgegIgZgPIAPgrQATALAYAIQAXAIAhABQAkAAAWgOQAUgOAIgZQAJgXAAgeIAAhQQgSAagcANQgbAMgaAAQhAAAghgmQgigkgBhBIAAjwIA0AAIAADoQABA3AZAWQAXAYAmgBQAUABAVgKQAUgKAOgXQAOgVAAglIAAjoIA1AAIAAGeQAAAsgPAhQgOAhgfASQggASg1ABQgdAAgegJg");
	this.shape_61.setTransform(462.55,430.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AiDCgQgggkAAgwQAAg8AngiQAngjA5ABQAfAAAWALQAWALAMAQIAAgGQAAghgRgXQgQgWgvAAQgeAAgXAJQgYAKgSALIgXhhQAbgPAmgIQAngIAeAAQBfAAAlAuQAlAuAABHIAADbIhcAAIgJgqQgLAVgbAQQgZAQgmAAQg9AAggglgAggAiQgPAMAAAWQAAAVAPANQAQANAWAAQAOAAAPgEQAOgFAKgKQgBgggQgVQgQgWgaAAQgRAAgPANg");
	this.shape_62.setTransform(403.325,421.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag7EUIAAl0IB3AAIAAF0gAguihQgUgTABgcQgBgcAUgTQASgUAcAAQAbAAAUAUQATATAAAcQAAAcgTATQgUAUgbgBQgcABgSgUg");
	this.shape_63.setTransform(374.8,412.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ah1DAIAAl0IBEAAQAMAAAFAEQAFADADAKIAJAiQANgaAagSQAagSAmAAIAQACQAJACAFADIgaBtIgOgFQgIgCgJAAQgYAAgSATQgSASAAApIAADEg");
	this.shape_64.setTransform(351.625,420.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhOC1QghgQgWgbQgVgbgKgkQgKglAAgmQAAgmAKgkQAKgjAVgcQAWgbAhgQQAhgQAtAAQAuAAAhAQQAiAQAVAbQAVAcAKAjQAKAkAAAmQAAAmgKAlQgKAkgVAbQgVAbgiAQQghAQguAAQgtAAghgQgAgohMQgPAYAAA0QAAA1APAYQAPAZAZAAQAaAAAPgZQAPgYAAg1QAAg0gPgYQgPgZgaAAQgZAAgPAZg");
	this.shape_65.setTransform(316.225,421.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("ACnDAIAAjgQAAghgPgOQgQgOgVAAQgVAAgQAOQgQAOAAAhIAADgIh3AAIAAjgQAAghgQgOQgQgOgWAAQgVAAgRAOQgQAOAAAhIAADgIh4AAIAAl0IBFAAQALAAAFAEQAFADADAKIAIAcQARgYAegQQAegQAmAAQAqAAAbAQQAcAPAOAaQARgXAegRQAdgRAmAAQBHAAAdApQAeApAAA8IAADxg");
	this.shape_66.setTransform(264.375,420.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag6C2QgmgQgYgbQgYgbgMgkQgMgkAAgoQAAgmAKgkQAKgjAVgcQAWgbAhgQQAhgQAtAAQBYAAAlA4QAlA5AABSIAAAWIjYAAQADArAUATQAUAUAtgBQAjABAYgJQAZgHATgLIAaBVQgbAPgiAKQghALgvAAQgxAAglgPgAA2gwQgCgTgLgRQgMgRgXAAQgRAAgOAOQgOAMgGAbIBjAAIAAAAg");
	this.shape_67.setTransform(212.375,421.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ACnDAIAAjgQAAghgPgOQgQgOgVAAQgVAAgQAOQgQAOAAAhIAADgIh3AAIAAjgQAAghgQgOQgQgOgWAAQgVAAgRAOQgQAOAAAhIAADgIh4AAIAAl0IBFAAQALAAAFAEQAFADADAKIAIAcQARgYAegQQAegQAmAAQAqAAAbAQQAcAPAOAaQARgXAegRQAdgRAmAAQBHAAAdApQAeApAAA8IAADxg");
	this.shape_68.setTransform(161.125,420.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhsCZQgjglAAhDIAAjuIA0AAIAADmQABA5AZAWQAZAZAngBQAVAAAWgKQAVgKAPgXQAOgWAAgmIAAjmIA0AAIAAFzIgrAAIgFgtQgMASgRALQgRAMgUAGQgUAGgSAAQhBAAgjglg");
	this.shape_69.setTransform(696.975,322.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAKDrQgZgMgQgcQgQgbAAgvIAAjSIhLgLIAAghIBLAAIAAhwIAzAAIAABwIBzAAIAAAmIhzAIIAADNQAAAuASATQARAUAiAAQAKAAALgDQAKgCAIgEIALAoQgMAGgPADQgPADgPAAIgDAAQgdAAgYgLg");
	this.shape_70.setTransform(662.85,316.926);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhQCzQgdgOgSgbQgSgbAAglQAAgmASgcQATgaAegPQAdgPAkAAQApAAAbAQQAbAPAMAWIAAgyQAAgcgJgXQgIgXgVgMQgWgOglAAQgfAAgXAGQgYAFgTAIIgNgvQAZgJAdgGQAdgFAbAAQA3ABAhARQAhARAOAfQAOAfAAApIAADxIgtAAIgEgmQgNASgcANQgdAOgoABQgkAAgfgPgAhDAQQgYAUgBAkQABAiAZAVQAZAWAqAAQAaAAAagNQAagNAQgVIAAgDQgBgvgbgdQgagbgvAAQglgBgYAVg");
	this.shape_71.setTransform(609.1009,322.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhlERQgfgKgWgNIAAoUIAzAAIAAD0QAPggAfgRQAegRAhAAQAzABAhAYQAhAYAQApQAQAoAAAxQAAA8gUAuQgUAvgoAbQgoAbg8ABQgtAAgfgKgAgvgsQgYAOgPAeQgPAeAAAzIAACLQANAIAVAEQAVAFAcAAQAsgBAagXQAbgYAMglQAMgkgBgpQABgggJgfQgJgdgWgUQgWgUgoAAIgBAAQgZAAgWANg");
	this.shape_72.setTransform(570.875,313.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAYQAgAXAOApQAOAoAAAyIAAAbIj5AAQABAjAMAeQANAfAaATQAaATAqABQAhAAAYgGQAagEAUgLIAQApQgbAOgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAQgLAbQgMAagDAfIDEAAIAAgDQAAgdgJgaQgJgagVgQQgUgQgjAAQghAAgWAQg");
	this.shape_73.setTransform(530.675,322.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhsCZQgjglAAhDIAAjuIA0AAIAADmQABA5AZAWQAZAZAngBQAVAAAWgKQAVgKAPgXQAOgWAAgmIAAjmIA0AAIAAFzIgrAAIgFgtQgMASgRALQgRAMgUAGQgUAGgSAAQhBAAgjglg");
	this.shape_74.setTransform(491.125,322.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AheC+IAAlzIAZAAQAIAAAEADQAEADACAIIAIAvQAJgXAQgPQAQgPASgIQATgIATAAQALAAAKACQAKABAKAFIgLA5QgIgFgKgCQgJgCgLAAQgWAAgUAKQgTALgNAYQgNAYAAAoIAADWg");
	this.shape_75.setTransform(462.225,321.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AiaEbIAAouIAZAAQAIABAEACQAEAEABAGIAIAwQAKgXARgPQARgOAWgJQAWgHAWgBQAzABAhAZQAhAYAQAqQAQApAAAzQAAA3gSAtQgSAvgkAbQglAcg2ABQgWABgXgGQgYgFgYgQIAADNgAgvjfQgYAOgPAfQgPAeAAAzIAACAQATANAVAHQAVAHAgAAQAogBAZgWQAYgYALgjQALgkgBgnQABgigJgfQgJgfgWgUQgWgUgogBIgBAAQgZAAgWANg");
	this.shape_76.setTransform(427.275,331.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhQCzQgdgOgSgbQgSgbAAglQAAgmASgcQATgaAegPQAdgPAkAAQApAAAbAQQAbAPAMAWIAAgyQAAgcgJgXQgIgXgVgMQgWgOglAAQgfAAgXAGQgYAFgTAIIgNgvQAZgJAdgGQAdgFAbAAQA3ABAhARQAhARAOAfQAOAfAAApIAADxIgtAAIgEgmQgNASgcANQgdAOgoABQgkAAgfgPgAhDAQQgYAUgBAkQABAiAZAVQAZAWAqAAQAaAAAagNQAagNAQgVIAAgDQgBgvgbgdQgagbgvAAQglgBgYAVg");
	this.shape_77.setTransform(366.1009,322.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AiPC+IAAlzIAYAAQAIAAAEADQAFADABAIIAGAfQAMgRARgMQASgMATgGQAUgGASAAQBBAAAjAlQAjAkAABDIAADvIg0AAIAAjnQAAg4gZgXQgZgYgoABQgVAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_78.setTransform(307.825,321.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhXCnQgjgbgRgsQgRgsAAg0QAAg0ARgrQARgrAjgbQAigbA1gBQA2ABAiAbQAjAbARArQARArgBA0QABA0gRAsQgRAsgjAbQgiAag2ABQg1gBgigagAg9h9QgYAVgJAhQgKAiAAAlQAAAmAKAhQAJAiAYAUQAWAWAnABQAngBAXgWQAWgUAKgiQALghgBgmQABglgLgiQgKghgWgVQgXgVgnAAQgnAAgWAVg");
	this.shape_79.setTransform(267.85,322.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AiyEFIAAoJICwAAQBCABApAXQAnAYASAmQARAnAAArQAAA1gWArQgWArgxAcQgwAbhMAAQgZAAgXgDQgXgDgTgGIAACrgAiAAoQAUAHAYAEQAWAFAZAAQBBgCAjgWQAjgXANggQANgigBgjQABgbgJgcQgJgcgbgTQgagSgxgBIiEAAg");
	this.shape_80.setTransform(227.5,314.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo18();
	this.instance.setTransform(848.85,79,1,1,0,0,0,103.8,79);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ABuDkIhmibIgVACIgZABQgWAAgTgDQgUgCgRgGIAACjIgsAAIAAnHICaAAQA6ABAjAUQAjATAPAgQAPAfgBAlQAAAggKAdQgLAcgVAXQgWAXgjANIBtCngAh0AWQASAGAUAEQAUADAWAAQA4AAAegTQAfgSALgcQAMgdgBgcQABgXgJgWQgIgXgXgPQgXgPgqgBIhzAAg");
	this.shape_81.setTransform(552.175,1310.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("ACLDlIg6igIiiAAIg6CgIgxAAICtnJIAPAAQAJgBAEADQAFAEAEAJICnG6gABEAfIhEi9IhDC9ICHAAg");
	this.shape_82.setTransform(510.725,1310.1214);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_83.setTransform(481.825,1310.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgwDWQgngUgaggQgaghgMgqQgMgqAAgtQAAgvAMgqQAMgpAaggQAaggAngTQAogTA1AAQAhAAAeAIQAdAIAbAOIgSAkQgTgKgZgHQgZgIghABQgsgBgfARQgeAPgTAbQgTAbgIAiQgJAhAAAmQAAAjAJAjQAIAiATAcQATAbAeAQQAfAQAsAAQAjAAAagHQAYgIAWgKIANAkQgaAPgdAIQgcAIgkAAQg1gBgogSg");
	this.shape_84.setTransform(453.1,1310.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_85.setTransform(424.375,1310.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("ACdDlQgMAAgHgGQgJgFgGgKIj4lcIABFxIgsAAIAAnJIAOAAQAKAAAIAFQAHAFAGAIID5FdIgCltIAtAAIAAHHg");
	this.shape_86.setTransform(394.1,1310.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_87.setTransform(363.875,1310.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.instance}]}).wait(1));

	// Capa_3
	this.instance_1 = new lib.Símbolo19();
	this.instance_1.setTransform(476.3,685,1,1,0,0,0,476.3,-235.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Capa_2
	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(476.3,685,1,1,0,0,0,476.3,685);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13copia, new cjs.Rectangle(0,0,952.6,1370.1), null);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo18();
	this.instance.setTransform(848.85,79,1,1,0,0,0,103.8,79);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOnDmQghglAAgwQAAg8AogiQAmgkA5ABQAhAAAVALQAYAMAKAOIAAgFQAAghgQgWQgRgWgwAAQgeAAgXAKQgTAHgWAMIgXhgQAYgOAogJQAogHAeAAQBgAAAlAtQAlAuAABGIAADdIhdAAIgJgqQgJATgcASQgaAQgnAAQg7gBghgkgAQKBoQgPALgBAWQAAAVAQANQAOANAZAAQAQAAAMgEQAPgFAJgKQgBgggQgUQgPgWgbAAQgSAAgOANgAaqEAQgjgKgWgKIAehaQAfALAWAGQAbAHAbAAQAeAAALgHQANgFAAgNQAAgNgKgGQgKgFgSgDIgKgBQhIgKgggdQgggfAAgvQgBgSAKgXQAIgXAUgSQAUgUAfgMQAggMAqAAQAtAAAfAHQAgAHAQAHIgXBdIgsgNQgXgGgYABQgcgBgOAGQgNAGAAAOQgBAMAKAFQALAGAQACIAKABQBDAKAkAdQAjAcAAAwQAAA0gpAnQgqAnhWAAQgxAAghgKgAVDEAQgkgKgVgKIAdhaQAhALAVAGQAbAHAaAAQAdAAAMgHQANgFAAgNQAAgNgKgGQgJgFgSgDIgLgBQhHgKgggdQghgfAAgvQAAgSAJgXQAJgXATgSQAUgUAfgMQAggMAqAAQAuAAAfAHQAfAHARAHIgXBdIgsgNQgZgGgWABQgdgBgOAGQgNAGAAAOQAAAMAKAFQAKAGAQACIAKABQBDAKAlAdQAiAcAAAwQAAA0gpAnQgpAnhXAAQgwAAghgKgAHlEAIAAoKIC1AAQA4AAApAQQAoAPAZAaQAZAZALAhQALAigBAjQAAAogNAnQgOAkgbAdQgZAbgqATQgpAQg3ABIgagCQgPgCgMgDIAACKgAJcAOQAMADAJABIAVAAQAgABASgLQAUgJALgPQALgPAEgRQADgRABgQQAAgXgQgbQgQgaguABIhAAAgACdEAIhBl3IhiEKIhaAAQgPABgGgGQgIgFgFgOIhTjwIhGF1Ih2AAIBooKIBuAAQARABAIAGQAIAHAGASIBXD2IBlkWIBuAAQAPABAIAGQAIAJADAQIBYHqgAouEAIgchzIiKAAIgcBzIh/AAICboKIBXAAQAaAAAQAMQAOAKAIAbICOHZgAq8AuIBZAAIgsizgAxFEAIAAmZIiHgRIAAhgIGGAAIAABgIiHARIAAGZgA0TEAIgdhzIiJAAIgcBzIh+AAICaoKIBYAAQAaAAAPAMQAPAKAHAbICPHZgA2gAuIBZAAIgtizgA+kEAIAAoKIB3AAIAAGdIDFAAIggBtg");
	this.shape.setTransform(462.1,830.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_1.setTransform(692.125,748.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiDChQggglAAgwQAAg8AngiQAngiA5AAQAfgBAWALQAWAMAMAPIAAgFQAAghgRgXQgQgWgvAAQgeAAgXAJQgYAJgSAMIgXhhQAbgPAmgIQAngIAeAAQBfAAAlAuQAlAuAABHIAADbIhcAAIgJgqQgLAVgbAQQgZAQgmAAQg9AAgggkgAggAiQgPAMAAAWQAAAVAPANQAQANAWAAQAOAAAPgFQAOgEAKgKQgBgggQgVQgQgWgaAAQgRAAgPANg");
	this.shape_2.setTransform(654.425,748.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5D+QgdgdAAg4IAAnDIB1AAIAAG8QAAAKAGAIQAGAGAPAAIAKgBQAFAAACgCIAMBaQgLAEgQADQgQACgJAAQhAABgcgdg");
	this.shape_3.setTransform(626.925,739.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5D+QgdgdAAg4IAAnDIB1AAIAAG8QAAAKAGAIQAGAGAPAAIAKgBQAFAAACgCIAMBaQgLAEgQADQgQACgJAAQhAABgcgdg");
	this.shape_4.setTransform(604.925,739.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7EUIAAlzIB3AAIAAFzgAguihQgUgTABgcQgBgcAUgTQASgUAcAAQAbAAAUAUQATATAAAcQAAAcgTATQgUAUgbgBQgcABgSgUg");
	this.shape_5.setTransform(581.9,739.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACnDAIAAjgQAAghgPgOQgQgOgVAAQgVAAgQAOQgQAOAAAhIAADgIh3AAIAAjgQAAghgQgOQgQgOgWAAQgVAAgRAOQgQAOAAAhIAADgIh4AAIAAl0IBFAAQALAAAFAEQAFADADAKIAIAcQARgYAegQQAegQAmAAQAqAAAbAQQAcAPAOAaQARgXAegRQAdgRAmAAQBHAAAdApQAeApAAA8IAADxg");
	this.shape_6.setTransform(539.725,747.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcENQgkgNgSgRIAWhbQARAOAYAKQAZAMAfAAQA0AAASgbQASgbAAgnIAAguQgRAXgcARQgbARglAAQhBAAgcgpQgbgpAAg7IAAjxIB3AAIAADgQAAAhAOAOQAPAOAUAAQAUAAAPgOQAPgOAAghIAAjgIB3AAIAAF6QABBQgqA0QgrAzhlAAQgoAAgkgMg");
	this.shape_7.setTransform(470.6,757.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_8.setTransform(415.375,748.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6C2QgmgQgYgbQgYgbgMgkQgMgkAAgoQAAgmAKgkQAKgjAVgcQAWgbAhgQQAhgQAtAAQBYAAAlA4QAlA4AABTIAAAWIjYAAQADArAUATQAUAUAtgBQAjABAYgJQAZgHATgMIAaBWQgbAPgiAKQghALgvAAQgxAAglgPgAA2gwQgCgSgLgSQgMgRgXAAQgRAAgOAOQgOAMgGAbIBjAAIAAAAg");
	this.shape_9.setTransform(377.925,748.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5D+QgdgdAAg4IAAnDIB1AAIAAG8QAAAKAGAIQAGAGAPAAIAKgBQAFAAACgCIAMBaQgLAEgQADQgQACgJAAQhAABgcgdg");
	this.shape_10.setTransform(348.875,739.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhxEQQgqgNgWgMIAAoTIBxAAIAADZQARgSAZgMQAYgLAeAAQBAAAAqAwQAoAwAABZQAABtg1AyQg1AxhaAAQg2AAgpgNgAgoANQgSAYAAAxIAABcQAFAEAMADQAMADASAAQAmAAARgcQARgdAAgvQAAgugPgZQgQgXgbAAQgaAAgRAXg");
	this.shape_11.setTransform(315.9,739.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhOC1QghgQgWgcQgVgagKglQgKgkAAgmQAAgmAKgkQAKgjAVgcQAWgbAhgQQAhgQAtAAQAuAAAhAQQAiAQAVAbQAVAcAKAjQAKAkAAAmQAAAmgKAkQgKAlgVAaQgVAcgiAQQghAQguAAQgtAAghgQgAgohMQgPAYAAA0QAAA1APAYQAPAZAZAAQAaAAAPgZQAPgYAAg1QAAg0gPgYQgPgZgaAAQgZAAgPAZg");
	this.shape_12.setTransform(274.475,748.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiLDtQgmgwgBhkQAAhaArg1QAqg2BLAAQAaAAAVAJQAWAIANAMIAAjNIBzAAIAAIuIhnAAIgJgzQgPAZgcASQgbATgjAAQg9AAgogwgAgrAPQgQAbgBAsQABAvAPAbQAPAcAhAAQAXAAAQgQQAQgQABgeIAAhoQgGgKgOgMQgOgKgXAAQgdAAgRAZg");
	this.shape_13.setTransform(233.05,739.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_14.setTransform(779.025,658.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6C1QgmgPgYgbQgYgbgMgkQgMgkAAgoQAAglAKglQAKgjAVgcQAWgbAhgQQAhgQAtAAQBYAAAlA5QAlA3AABTIAAAXIjYAAQADAqAUATQAUATAtABQAjgBAYgHQAZgIATgLIAaBVQgbAPgiALQghAKgvAAQgxAAglgQgAA2gvQgCgUgLgQQgMgRgXAAQgRgBgOANQgOANgGAcIBjAAIAAAAg");
	this.shape_15.setTransform(741.575,658.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhJFvQgTgCgOgGIAMhbIAMADQAIADAJAAQAbAAAKgPQAKgOAAgZIAAmaIB2AAIAAGkQAABFghAjQggAkhMAAQgNAAgTgDgAgGj+QgTgUAAgcQAAgcATgTQASgUAcAAQAcAAATAUQAUATAAAcQAAAcgUAUQgTASgcAAQgcAAgSgSg");
	this.shape_16.setTransform(708.175,659.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiDCgQgggkAAgwQAAg8AngiQAngjA5AAQAfAAAWAMQAWALAMAQIAAgGQAAgigRgVQgQgXgvAAQgeAAgXAJQgYAJgSANIgXhiQAbgPAmgIQAngIAeAAQBfAAAlAuQAlAuAABHIAADcIhcAAIgJgrQgLAVgbAQQgZAQgmAAQg9AAggglgAggAiQgPAMAAAWQAAAVAPANQAQANAWAAQAOAAAPgEQAOgFAKgKQgBgggQgVQgQgVgaAAQgRAAgPAMg");
	this.shape_17.setTransform(682.175,658.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_18.setTransform(645.675,658.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiDCgQgggkAAgwQAAg8AngiQAngjA5AAQAfAAAWAMQAWALAMAQIAAgGQAAgigRgVQgQgXgvAAQgeAAgXAJQgYAJgSANIgXhiQAbgPAmgIQAngIAeAAQBfAAAlAuQAlAuAABHIAADcIhcAAIgJgrQgLAVgbAQQgZAQgmAAQg9AAggglgAggAiQgPAMAAAWQAAAVAPANQAQANAWAAQAOAAAPgEQAOgFAKgKQgBgggQgVQgQgVgaAAQgRAAgPAMg");
	this.shape_19.setTransform(607.975,658.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiyEdIAAouIBFAAQALAAAGADQAFAEADAKIAIAfQAQgbAdgQQAcgQAjAAQBAAAAqAwQApAwgBBaQAABmgrA0QgrA1hJAAQgXAAgVgHQgVgHgMgKIAADIgAgoiiQgSAYAAAxIAABXIAOAHQAPAIATgBQAlAAARgbQARgcAAgwQAAgtgQgaQgOgYgcAAQgZAAgSAYg");
	this.shape_20.setTransform(569.5,667.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhqEEQgngHgfgNIAkhkQAZAKAaAFQAaAFAfAAQAyAAATgUQATgTAAgXQAAgdgWgPQgWgPgnAAIhHAAIAAhgIBFAAQAgAAASgOQASgOAAgaQAAgZgRgPQgSgPgpAAQgfAAgaAFQgaAHgaAJIgaheQAZgMAsgIQAsgIAnAAQBcAAAsAmQAsAmAAA4QAAAmgVAiQgUAhgcAQQAgAJAbAdQAbAfAAAuQAABHgxAxQgvAvhqAAQgqAAgngIg");
	this.shape_21.setTransform(508.775,651.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAXQAgAYAOApQAOAoAAAyIAAAbIj5AAQABAjAMAfQANAeAaATQAaATAqABQAhgBAYgFQAagEAUgLIAQApQgbAOgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAPgLAbQgMAbgDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgQgjAAQghgBgWARg");
	this.shape_22.setTransform(447.525,658.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhUEBQgigZgSgrQgRgqgBg1QAAg5AVgrQATgtAkgaQAkgaAvgBQAcAAAaAKQAbAJASASIAAjXIAzAAIAAItIgtAAIgGgsQgPAXgdAOQgcAPghAAQgxgBgigZgAgzgkQgaAWgMAhQgNAiAAApQAAAiALAhQALAgAXAWQAXAVAmABQAXAAAWgKQAWgKAPgYQAPgWABgnIAAiWQgLgOgYgMQgXgNgfAAQgmAAgaAVg");
	this.shape_23.setTransform(406.9,649.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhPC6QgdgHgXgKIAQgtQARAIAZAIQAZAGAhABQAnAAAWgLQAVgLAHgOQAHgPAAgNQAAgXgQgQQgSgRgngLIgYgHQg2gMgcgYQgcgXgBgqQAAgZAOgWQAPgYAfgOQAfgPAvgBQAgAAAaAFQAaAHAYAKIgQAtQgTgIgVgGQgWgGgfAAQghAAgTAIQgUAJgIAMQgIANAAANQAAAWASAOQARANAmAKIAYAGQA6AQAbAZQAbAZAAAnQAAAdgOAaQgPAaggARQggAQg1ABQgkAAgcgIg");
	this.shape_24.setTransform(350.3,658.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhYCnQgigbgRgsQgQgsgBg0QABg0AQgrQARgrAigbQAkgbA0gBQA2ABAjAbQAiAbARArQAQArAAA0QAAA0gQAsQgRAsgiAbQgjAag2ABQg0gBgkgagAg9h9QgYAVgJAhQgKAiAAAlQAAAmAKAhQAJAiAYAUQAWAWAnABQAngBAXgWQAXgUAJgiQAKghAAgmQAAglgKgiQgJghgXgVQgXgVgnAAQgnAAgWAVg");
	this.shape_25.setTransform(313.5,658.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAXQAgAYAOApQAOAoAAAyIAAAbIj5AAQABAjAMAfQANAeAaATQAaATAqABQAhgBAYgFQAagEAUgLIAQApQgbAOgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAPgLAbQgMAbgDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgQgjAAQghgBgWARg");
	this.shape_26.setTransform(274.725,658.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAJDrQgYgMgQgcQgQgbAAgvIAAjSIhLgLIAAghIBLAAIAAhwIAzAAIAABwIBzAAIAAAmIhzAIIAADNQAAAuARATQASAUAhAAQALAAAKgDQALgCAIgEIALAoQgNAGgOADQgPADgQAAIgCAAQgdAAgZgLg");
	this.shape_27.setTransform(241.15,653.426);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AheC+IAAlzIAZAAQAIAAAEADQAEADACAIIAIAvQAJgXAQgPQAQgPASgIQATgIATAAQALAAAKACQAKABAKAFIgLA5QgIgFgKgCQgJgCgLAAQgWAAgUAKQgTALgNAYQgNAYAAAoIAADWg");
	this.shape_28.setTransform(215.325,658.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhYCnQgigbgRgsQgQgsgBg0QABg0AQgrQARgrAigbQAkgbA0gBQA2ABAjAbQAiAbARArQAQArAAA0QAAA0gQAsQgRAsgiAbQgjAag2ABQg0gBgkgagAg9h9QgYAVgJAhQgKAiAAAlQAAAmAKAhQAJAiAYAUQAWAWAnABQAngBAXgWQAXgUAJgiQAKghAAgmQAAglgKgiQgJghgXgVQgXgVgnAAQgnAAgWAVg");
	this.shape_29.setTransform(180.3,658.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhQC6QgdgHgVgKIAPgtQARAIAZAIQAYAGAiABQAoAAAUgLQAWgLAHgOQAHgPgBgNQABgXgRgQQgRgRgngLIgYgHQg2gMgdgYQgbgXgBgqQAAgZAPgWQAOgYAfgOQAegPAwgBQAgAAAaAFQAaAHAXAKIgPAtQgSgIgXgGQgVgGgfAAQghAAgUAIQgTAJgIAMQgIANAAANQAAAWARAOQASANAnAKIAXAGQA6AQAcAZQAbAZAAAnQAAAdgPAaQgOAaghARQghAQg0ABQgkAAgdgIg");
	this.shape_30.setTransform(143.35,658.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhPC7QgegIgVgKIAPgsQARAHAZAHQAZAIAhAAQAnAAAWgLQAVgKAHgPQAHgPgBgNQABgXgQgQQgSgRgngKIgYgHQg2gNgdgXQgcgYAAgpQAAgZAPgYQAOgXAfgOQAfgPAvgBQAgAAAaAGQAaAFAYAMIgQAsQgSgIgXgGQgWgHgeAAQghAAgTAJQgUAJgIANQgIANAAANQAAAVASAOQARAMAnAKIAXAHQA6AQAbAYQAbAaAAAnQAAAdgOAaQgPAaggAQQghARg0ABQgkgBgcgGg");
	this.shape_31.setTransform(691.65,569.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhXCmQgjgbgRgrQgRgsAAg0QAAg0ARgrQARgsAjgbQAigaA1gBQA2ABAiAaQAjAbARAsQAQArAAA0QAAA0gQAsQgRArgjAbQgiAbg2ABQg1gBgigbgAg9h9QgYAVgJAiQgKAhAAAlQAAAmAKAiQAJAhAYAVQAWAVAnAAQAnAAAXgVQAXgVAJghQALgigBgmQABglgLghQgJgigXgVQgXgVgngBQgnABgWAVg");
	this.shape_32.setTransform(654.85,569.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTETQgRgHgKgPQgLgPAAgbIAAnsIA0AAIAAHrQAAAPAGAHQAJAGAPAAIAMgBQAHgBAFgEIAJApQgJAFgKACQgMACgKAAQgSAAgSgHg");
	this.shape_33.setTransform(628,560.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiPC+IAAlzIAYAAQAIAAAEADQAFADABAIIAGAfQAMgRARgMQASgMATgGQAUgGASAAQBBAAAjAlQAjAkAABDIAADvIg0AAIAAjnQAAg4gZgXQgZgYgoABQgVAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_34.setTransform(576.425,568.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhMCmQgmgagTgsQgRgsAAg0QAAgzAQgsQARgsAjgbQAjgaA0gBQA2ABAgAXQAgAYAOAoQAOAoAAAyIAAAcIj5AAQABAjAMAfQANAeAaATQAaATAqAAQAhAAAYgEQAagGAUgKIAQAoQgbAOgcAHQgcAGgkAAQg8gBgmgbgAgyiDQgVAQgLAbQgMAbgDAfIDEAAIAAgDQAAgegJgZQgJgagVgQQgUgQgjgBQghAAgWAQg");
	this.shape_35.setTransform(537.275,569.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhQCzQgdgPgSgbQgSgaAAglQAAgmASgbQATgbAegPQAdgPAkAAQApAAAbAQQAbAQAMAVIAAgyQAAgdgJgWQgIgXgVgNQgWgNglAAQgfAAgXAFQgYAGgTAIIgNgvQAZgKAdgEQAdgGAbAAQA3ABAhAQQAhASAOAfQAOAfAAAqIAADxIgtAAIgEgnQgNASgcAOQgdAOgoAAQgkAAgfgPgAhDAQQgYAVgBAjQABAjAZAUQAZAVAqAAQAaAAAagMQAagNAQgWIAAgBQgBgwgbgdQgagbgvgBQglAAgYAVg");
	this.shape_36.setTransform(478.0509,569.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiaEcIAAouIAZAAQAIAAAEACQAEAEABAGIAIAvQAKgVARgQQARgPAWgHQAWgJAWABQAzAAAhAZQAhAYAQAqQAQApAAAyQAAA4gSAtQgSAvgkAcQglAcg2ABQgWgBgXgFQgYgFgYgQIAADOgAgvjfQgYAOgPAeQgPAfAAAzIAACAQATANAVAHQAVAHAgAAQAoAAAZgYQAYgXALgjQALgkgBgoQABghgJgfQgJgfgWgUQgWgVgoAAIgBAAQgZAAgWANg");
	this.shape_37.setTransform(439.825,578.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgZEBIAAl0IAzAAIAAF0gAgci7QgLgLAAgRQAAgQALgMQAMgMAQAAQARAAALAMQAMAMAAAQQAAARgMALQgLAMgRAAQgQAAgMgMg");
	this.shape_38.setTransform(409.525,562.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag7CmQgmgbgSgrQgSgsAAg0QAAg0ASgrQASgsAmgbQAlgaA7gBQAYAAAZAFQAZAEAWAJIgOArQgQgGgUgEQgUgEgbgBQgqABgaAVQgaAVgMAiQgMAhABAlQgBAmAMAiQAMAhAaAVQAaAVAqAAQAcAAAUgDQAVgFAPgGIAOApQgXAKgZAFQgZAFgYAAQg7gBglgbg");
	this.shape_39.setTransform(384.85,569.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZEBIAAl0IAzAAIAAF0gAgci7QgLgLAAgRQAAgQALgMQAMgMAQAAQARAAALAMQAMAMAAAQQAAARgMALQgLAMgRAAQgQAAgMgMg");
	this.shape_40.setTransform(358.225,562.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAJDrQgYgMgQgcQgQgbAAgvIAAjSIhLgLIAAghIBLAAIAAhwIAzAAIAABwIBzAAIAAAmIhzAIIAADNQAAAuASATQARAUAhAAQALAAALgDQAJgCAKgEIAKAoQgNAGgOADQgPADgQAAIgCAAQgdAAgZgLg");
	this.shape_41.setTransform(334.95,563.926);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AheC+IAAlzIAZAAQAIAAAEADQAEADACAIIAIAvQAJgXAQgPQAQgPASgIQATgIATAAQALAAAKACQAKABAKAFIgLA5QgIgFgKgCQgJgCgLAAQgWAAgUAKQgTALgNAYQgNAYAAAoIAADWg");
	this.shape_42.setTransform(309.125,568.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhQCzQgdgPgSgbQgSgaAAglQAAgmASgbQATgbAegPQAdgPAkAAQApAAAbAQQAbAQAMAVIAAgyQAAgdgJgWQgIgXgVgNQgWgNglAAQgfAAgXAFQgYAGgTAIIgNgvQAZgKAdgEQAdgGAbAAQA3ABAhAQQAhASAOAfQAOAfAAAqIAADxIgtAAIgEgnQgNASgcAOQgdAOgoAAQgkAAgfgPgAhDAQQgYAVgBAjQABAjAZAUQAZAVAqAAQAaAAAagMQAagNAQgWIAAgBQgBgwgbgdQgagbgvgBQglAAgYAVg");
	this.shape_43.setTransform(273.8009,569.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AiaEcIAAouIAZAAQAIAAAEACQAEAEABAGIAIAvQAKgVARgQQARgPAWgHQAWgJAWABQAzAAAhAZQAhAYAQAqQAQApAAAyQAAA4gSAtQgSAvgkAcQglAcg2ABQgWgBgXgFQgYgFgYgQIAADOgAgvjfQgYAOgPAeQgPAfAAAzIAACAQATANAVAHQAVAHAgAAQAoAAAZgYQAYgXALgjQALgkgBgoQABghgJgfQgJgfgWgUQgWgVgoAAIgBAAQgZAAgWANg");
	this.shape_44.setTransform(235.575,578.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhAERQgegJgZgPIAQgsQATAMAYAIQAXAIAhABQAlAAAUgOQAVgPAJgXQAIgYAAgeIAAhQQgSAZgcANQgbANgZAAQhAAAgigmQgigkAAhBIAAjwIA0AAIAADoQABA2AXAYQAYAXAmgBQAUABAVgLQAVgJANgWQAOgWAAglIAAjoIA0AAIAAGeQABAsgOAhQgOAhghASQgfASg1ABQgdAAgfgIg");
	this.shape_45.setTransform(670.95,489.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhgC6QgjgKgVgJIAchaQAcAKAaAGQAaAHAcAAQAbAAANgGQANgGAAgMQAAgOgLgFQgKgGgQgCIgKgBQhIgKgggeQghgdAAgvQAAgUAJgXQAJgWATgTQAUgTAfgMQAfgMAqAAQAvAAAeAHQAeAGARAIIgWBcQgVgHgXgFQgXgGgYAAQgcAAgNAGQgNAFAAAPQAAAMAJAGQAKAGAPACIAKABQBEAKAjAcQAjAbAAAwQAAA1gpAmQgpAnhWAAQgvAAgigKg");
	this.shape_46.setTransform(613.325,479.575);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AiDChQggglAAgwQAAg8AngiQAngiA5AAQAfgBAWALQAWAMAMAPIAAgEQAAgjgRgWQgQgWgvAAQgeAAgXAJQgYAJgSAMIgXhhQAbgPAmgIQAngIAeAAQBfAAAlAuQAlAuAABHIAADcIhcAAIgJgrQgLAVgbAQQgZAQgmAAQg9AAgggkgAggAiQgPAMAAAWQAAAVAPANQAQANAWAAQAOAAAPgFQAOgEAKgKQgBgggQgVQgQgWgaAAQgRAAgPANg");
	this.shape_47.setTransform(575.625,479.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgrDPQgggjAAhGIAAiRIg8gPIAAhMIA8AAIAAhrIB3AAIAABrIBcAAIAABSIhcAOIAACDQAAAZAJAOQAKAOAbAAQAKAAAHgCIALgEIAMBcQgNAFgTADQgTACgNAAQhMAAghgjg");
	this.shape_48.setTransform(541.75,474.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA2DAIAAjgQAAghgQgOQgQgOgVAAQgVAAgQAOQgRAOAAAhIAADgIh3AAIAAl0IBEAAQAMAAAEAEQAFADAEAKIAHAcQARgYAegQQAdgQAmAAQBIAAAeApQAdApAAA8IAADxg");
	this.shape_49.setTransform(506.55,479.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AiQCXQgcgpgBg8IAAjwIB4AAIAADfQAAAhAPAOQAQAOAWAAQAVAAAQgOQARgPAAggIAAjfIB4AAIAAFzIhfAAIgIg5QgPAbgfAUQgfAVgqgBQhDAAgdgog");
	this.shape_50.setTransform(464.65,480.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiVELQgugcAAgzQAAggAVgbQAWgaAogMQgNgIgGgLQgJgLABgOQAAgdAUgSQAWgRAlgKQgxgFgjgfQgjggAAgzQAAg6AugnQAvgoBKAAQAXAAAUAEQAVAEAQAHIBxgYIAPBIIgWAGIglABQAIAPAGARQAEARABASQgBA8gqAhQgpAhg/AQIgOADQgJACgDADQgEAEAAAFQAAAGAFADQAEADAGABIA2ALQBCAOAgAYQAfAZAAAsQAAAmgSAcQgRAcgdASQgcASglAKQgmAJgnAAIgFAAQhHAAgsgagAhMB/QgIALAAAPQAAAYAXANQAVANAiAAQAYAAATgLQAUgKAAgYQAAgOgNgLQgMgKgagEIg+gJQgNAGgHALgAgzi1QgPAQAAAYQAAAZAPAPQAOAPAZAAQAbAAANgPQANgPAAgZQAAgYgOgQQgOgPgZAAQgZAAgOAPg");
	this.shape_51.setTransform(422.65,488.2268);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag6C1QgmgPgYgbQgYgbgMgkQgMgkAAgoQAAgmAKgjQAKgkAVgbQAWgcAhgQQAhgQAtAAQBYAAAlA4QAlA4AABTIAAAWIjYAAQADArAUATQAUATAtAAQAjABAYgJQAZgHATgMIAaBWQgbAPgiALQghAKgvAAQgxAAglgQgAA2gwQgCgSgLgSQgMgQgXAAQgRAAgOAMQgOANgGAbIBjAAIAAAAg");
	this.shape_52.setTransform(382.725,479.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ah1DAIAAl0IBEAAQAMAAAFAEQAFADADAKIAJAiQANgaAagSQAagSAmAAIAQACQAJACAFADIgaBtIgOgFQgIgCgJAAQgYAAgSATQgSASAAApIAADEg");
	this.shape_53.setTransform(351.125,479.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AiyEdIAAouIBFAAQALAAAGAEQAEADADAKIAJAeQAQgaAcgQQAcgQAkAAQBBAAAoAwQApAwABBbQAABlgsA1QgsA0hIAAQgYAAgUgHQgVgHgMgKIAADIgAgpiiQgRAZAAAxIAABWIAOAHQAPAHATABQAmgBAQgbQARgdAAgvQAAgugQgYQgPgZgcAAQgYAAgTAYg");
	this.shape_54.setTransform(315.4,488.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhqEFQgngIgfgMIAkhmQAZALAaAEQAaAGAfAAQAyAAATgTQATgUAAgXQAAgdgWgPQgWgPgnAAIhHAAIAAhfIBFAAQAgAAASgPQASgOAAgbQAAgXgRgQQgSgQgpAAQgfABgaAFQgaAHgaAJIgahfQAZgMAsgHQAsgIAnAAQBcAAAsAmQAsAmAAA5QAAAmgVAhQgUAigcAPQAgAIAbAfQAbAeAAAuQAABIgxAvQgvAwhqAAQgqAAgngHg");
	this.shape_55.setTransform(254.675,472.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAYQAgAXAOApQAOAoAAAyIAAAbIj5AAQABAjAMAeQANAfAaATQAaATAqABQAhAAAYgGQAagEAUgLIAQAoQgbAPgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAQgLAbQgMAagDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgRgjAAQghABgWAQg");
	this.shape_56.setTransform(676.525,390.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAJDrQgYgMgQgcQgQgbAAgvIAAjSIhLgLIAAghIBLAAIAAhwIAzAAIAABwIBzAAIAAAmIhzAIIAADNQAAAuASATQARAUAhAAQALAAALgDQAKgCAJgEIAKAoQgMAGgPADQgPADgPAAIgDAAQgdAAgZgLg");
	this.shape_57.setTransform(642.95,384.876);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AiPC+IAAlzIAYAAQAIAAAEADQAFADABAIIAGAfQAMgRARgMQASgMATgGQAUgGASAAQBBAAAjAlQAjAkAABDIAADvIg0AAIAAjnQAAg4gZgXQgZgYgoABQgVAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_58.setTransform(609.225,389.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAYQAgAXAOApQAOAoAAAyIAAAbIj5AAQABAjAMAeQANAfAaATQAaATAqABQAhAAAYgGQAagEAUgLIAQAoQgbAPgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAQgLAbQgMAagDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgRgjAAQghABgWAQg");
	this.shape_59.setTransform(570.075,390.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AkEC+IAAlzIAYAAQAJAAADADQAFADABAIIAHAfQALgRASgMQARgMATgGQAUgGATAAQAuAAAfASQAeATAPAjQAIgYASgQQATgQAXgIQAWgIAWAAQBBAAAjAlQAhAkABBDIAADvIg0AAIAAjnQgBg4gYgXQgZgYgnABQgWAAgVAKQgVAKgOAWQgOAXgBAlIAADnIgyAAIAAjnQgBg4gZgXQgagYgnABQgWAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_60.setTransform(519.2,389.675);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhQCzQgdgOgSgbQgSgbAAglQAAgmASgcQATgaAegPQAdgPAkAAQApAAAbAQQAbAPAMAXIAAgzQAAgcgJgXQgIgXgVgMQgWgOglAAQgfAAgXAGQgYAFgTAIIgNgvQAZgJAdgGQAdgFAbAAQA3ABAhARQAhARAOAfQAOAfAAApIAADxIgtAAIgEgmQgNASgcANQgdAOgoABQgkAAgfgPgAhDAQQgYAUgBAkQABAiAZAVQAZAWAqAAQAaAAAagNQAagNAQgVIAAgDQgBgvgbgdQgagbgvAAQglgBgYAVg");
	this.shape_61.setTransform(467.2509,390.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAKDrQgZgMgQgcQgQgbAAgvIAAjSIhLgLIAAghIBLAAIAAhwIAzAAIAABwIBzAAIAAAmIhzAIIAADNQAAAuARATQASAUAiAAQAKAAAKgDQALgCAIgEIALAoQgNAGgOADQgPADgPAAIgDAAQgdAAgYgLg");
	this.shape_62.setTransform(434.45,384.876);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag8CnQglgbgTgsQgRgsAAg0QAAg0ARgrQATgrAlgbQAmgbA7gBQAYAAAZAEQAZAFAXAKIgQArQgQgHgTgFQgUgEgbAAQgrABgaAVQgZAVgMAhQgMAiABAlQgBAmAMAhQAMAiAZAUQAaAWArABQAbAAAVgFQAUgDAQgIIAOArQgXAJgZAEQgZAGgYAAQg7gBgmgag");
	this.shape_63.setTransform(404.95,390.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhMCnQgmgbgTgsQgRgsAAg0QAAgzAQgsQARgrAjgbQAjgbA0gBQA2ABAgAYQAgAXAOApQAOAoAAAyIAAAbIj5AAQABAjAMAeQANAfAaATQAaATAqABQAhAAAYgGQAagEAUgLIAQAoQgbAPgcAFQgcAHgkAAQg8gBgmgagAgyiCQgVAQgLAbQgMAagDAgIDEAAIAAgEQAAgdgJgaQgJgagVgQQgUgRgjAAQghABgWAQg");
	this.shape_64.setTransform(368.425,390.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AheC+IAAlzIAZAAQAIAAAEADQAEADACAIIAIAvQAJgXAQgPQAQgPASgIQATgIATAAQALAAAKACQAKABAKAFIgLA5QgIgFgKgCQgJgCgLAAQgWAAgUAKQgTALgNAYQgNAYAAAoIAADWg");
	this.shape_65.setTransform(340.075,389.675);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AheC+IAAlzIAZAAQAIAAAEADQAEADACAIIAIAvQAJgXAQgPQAQgPASgIQATgIATAAQALAAAKACQAKABAKAFIgLA5QgIgFgKgCQgJgCgLAAQgWAAgUAKQgTALgNAYQgNAYAAAoIAADWg");
	this.shape_66.setTransform(315.775,389.675);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhYCnQgigbgRgsQgQgsAAg0QAAg0AQgrQARgrAigbQAjgbA1gBQA2ABAjAbQAiAbARArQAQArAAA0QAAA0gQAsQgRAsgiAbQgjAag2ABQg1gBgjgagAg+h9QgWAVgKAhQgKAiAAAlQAAAmAKAhQAKAiAWAUQAXAWAnABQAngBAXgWQAXgUAJgiQALghAAgmQAAglgLgiQgJghgXgVQgXgVgngBQgnABgXAVg");
	this.shape_67.setTransform(280.75,390.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag7CnQgmgbgSgsQgSgsAAg0QAAg0ASgrQASgrAmgbQAlgbA7gBQAYAAAZAEQAZAFAWAKIgOArQgRgHgTgFQgUgEgbAAQgqABgaAVQgaAVgMAhQgMAiABAlQgBAmAMAhQAMAiAaAUQAaAWAqABQAcAAAUgFQAVgDAQgIIANArQgXAJgZAEQgZAGgYAAQg7gBglgag");
	this.shape_68.setTransform(245.25,390.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhMCmQgmgagTgsQgRgsAAg0QAAgzAQgsQARgrAjgcQAjgaA0gBQA2ABAgAXQAgAYAOAoQAOAoAAAyIAAAcIj5AAQABAjAMAfQANAeAaATQAaATAqAAQAhAAAYgEQAagGAUgKIAQApQgbANgcAHQgcAGgkAAQg8gBgmgbgAgyiDQgVARgLAaQgMAbgDAgIDEAAIAAgEQAAgegJgZQgJgagVgQQgUgQgjAAQghAAgWAPg");
	this.shape_69.setTransform(601.575,300.55);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhUEBQgigZgSgrQgSgqAAg1QABg5ATgrQAUgtAkgaQAkgaAwgBQAaAAAbAKQAbAJASASIAAjXIAyAAIAAItIgtAAIgEgsQgQAXgdAOQgcAPghAAQgxgBgigZgAgzgkQgaAWgMAhQgMAiAAApQAAAiAKAhQALAgAXAWQAYAVAlABQAXAAAWgKQAXgKAPgYQAPgWABgnIAAiWQgNgOgWgMQgYgNgfAAQgnAAgZAVg");
	this.shape_70.setTransform(560.95,291.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AiPC+IAAlzIAYAAQAIAAAEADQAFADABAIIAGAfQAMgRARgMQASgMATgGQAUgGASAAQBBAAAjAlQAjAkAABDIAADvIg0AAIAAjnQAAg4gZgXQgZgYgoABQgVAAgVAKQgWAKgOAWQgPAXAAAlIAADng");
	this.shape_71.setTransform(521.425,300.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhYCmQgigbgRgrQgQgsAAg0QAAgzAQgsQARgrAigcQAkgaA0gBQA2ABAjAaQAiAcARArQAQAsAAAzQAAA0gQAsQgRArgiAbQgjAbg2ABQg0gBgkgbgAg+h9QgWAVgKAhQgKAiAAAlQAAAmAKAiQAKAhAWAVQAXAVAnAAQAnAAAXgVQAXgVAJghQALgiAAgmQAAglgLgiQgJghgXgVQgXgVgnAAQgnAAgXAVg");
	this.shape_72.setTransform(481.45,300.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AiaEcIAAouIAZAAQAIgBAEADQAEADABAHIAIAvQAKgVARgQQARgPAWgHQAWgJAWABQAzAAAhAZQAhAYAQAqQAQApAAAyQAAA4gSAuQgSAugkAcQglAcg2AAQgWAAgXgFQgYgFgYgQIAADOgAgvjfQgYAOgPAeQgPAfAAA0IAAB/QATANAVAHQAVAHAgAAQAogBAZgXQAYgXALgjQALgkgBgoQABghgJgfQgJgfgWgUQgWgVgoAAIgBAAQgZAAgWANg");
	this.shape_73.setTransform(441.925,309.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhQC7QgdgIgVgKIAPgsQARAHAZAHQAYAIAiAAQAogBAUgKQAWgKAHgPQAHgPgBgNQABgXgQgQQgSgRgngKIgYgHQg2gNgdgXQgbgYgBgpQAAgZAPgYQAOgWAfgPQAfgPAvgBQAgAAAaAFQAaAGAYAMIgQAsQgSgIgXgGQgVgHgfABQghgBgTAJQgUAJgIANQgIANAAANQAAAVASAOQARAMAnAKIAXAHQA6AQAcAZQAaAZAAAnQAAAdgOAaQgPAaggARQghAQg0ABQgkgBgdgGg");
	this.shape_74.setTransform(403.55,300.55);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhMCmQgmgagTgsQgRgsAAg0QAAgzAQgsQARgrAjgcQAjgaA0gBQA2ABAgAXQAgAYAOAoQAOAoAAAyIAAAcIj5AAQABAjAMAfQANAeAaATQAaATAqAAQAhAAAYgEQAagGAUgKIAQApQgbANgcAHQgcAGgkAAQg8gBgmgbgAgyiDQgVARgLAaQgMAbgDAgIDEAAIAAgEQAAgegJgZQgJgagVgQQgUgQgjAAQghAAgWAPg");
	this.shape_75.setTransform(367.575,300.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AB+EFIh1iyIgYAEIgcABQgagBgWgDQgXgDgTgHIAAC7IgyAAIAAoJICwAAQBCABAoAXQAoAVASAlQARAkAAAqQAAAkgMAiQgMAggaAaQgZAbgoAPIB9C/gAiFAZQAUAHAXAEQAXAFAZAAQBBgCAjgVQAjgVANggQANghgBggQABgagJgaQgKgagagRQgagRgxgBIiEAAg");
	this.shape_76.setTransform(326.725,293.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("ABuDkIhmibIgVACIgZABQgWAAgTgDQgUgCgRgGIAACjIgsAAIAAnHICaAAQA6ABAjAUQAjATAPAgQAPAfgBAlQAAAggKAdQgLAcgVAXQgWAXgjANIBtCngAh0AWQASAGAUAEQAUADAWAAQA4AAAegTQAfgSALgcQAMgdgBgcQABgXgJgWQgIgXgXgPQgXgPgqgBIhzAAg");
	this.shape_77.setTransform(552.175,1310.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("ACLDlIg6igIiiAAIg6CgIgxAAICtnJIAPAAQAJgBAEADQAFAEAEAJICnG6gABEAfIhEi9IhDC9ICHAAg");
	this.shape_78.setTransform(510.725,1310.1214);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_79.setTransform(481.825,1310.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgwDWQgngUgaggQgaghgMgqQgMgqAAgtQAAgvAMgqQAMgpAaggQAaggAngTQAogTA1AAQAhAAAeAIQAdAIAbAOIgSAkQgTgKgZgHQgZgIghABQgsgBgfARQgeAPgTAbQgTAbgIAiQgJAhAAAmQAAAjAJAjQAIAiATAcQATAbAeAQQAfAQAsAAQAjAAAagHQAYgIAWgKIANAkQgaAPgdAIQgcAIgkAAQg1gBgogSg");
	this.shape_80.setTransform(453.1,1310.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_81.setTransform(424.375,1310.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("ACdDlQgMAAgHgGQgJgFgGgKIj4lcIABFxIgsAAIAAnJIAOAAQAKAAAIAFQAHAFAGAIID5FdIgCltIAtAAIAAHHg");
	this.shape_82.setTransform(394.1,1310.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWDkIAAnHIAtAAIAAHHg");
	this.shape_83.setTransform(363.875,1310.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Capa_3
	this.instance_1 = new lib.Símbolo19();
	this.instance_1.setTransform(476.3,685,1,1,0,0,0,476.3,-235.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Capa_2
	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(476.3,685,1,1,0,0,0,476.3,685);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(0,0,952.6,1370.1), null);


// stage content:
(lib.inicio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {inicio:0,mensaje:25,mensaje2:35};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [24,34,45];
	// timeline functions:
	this.frame_24 = function() {
		this.btn_inicio.addEventListener("click", playHistoria.bind(this));
		this.btn_inicio3.addEventListener("click", playMemoria.bind(this));
		
		
		//this.GoToMenu.addEventListener("click", playMenu.bind(this));
		
		function playHistoria() {	
			//historia();
			//window.open("formulario.html", "_self");
			this.gotoAndPlay("mensaje");
		}
		
		function playMemoria() {	
			//historia();
			//window.open("formulario.html", "_self");
			this.gotoAndPlay("mensaje2");
		}
		
		this.stop();
	}
	this.frame_34 = function() {
		this.btn_inicio2.addEventListener("click", playHistoria2.bind(this));
		
		
		function playHistoria2() {	
			//historia();
			window.open("formulario.html", "_self");
			//this.gotoAndPlay("mensaje");
		}
		
		this.stop();
	}
	this.frame_45 = function() {
		this.btn_inicio4.addEventListener("click", playHistoria4.bind(this));
		/*this.btn_lengua.addEventListener("click", playLengua.bind(this));
		this.btn_deportes.addEventListener("click", playDeportes.bind(this));
		this.btn_ciencia.addEventListener("click", playCiencia.bind(this));
		this.btn_arte.addEventListener("click", playArte.bind(this));*/
		
		//this.GoToMenu.addEventListener("click", playMenu.bind(this));
		
		function playHistoria4() {	
			//historia();
			window.open("cartas/index.html", "_self");
			//this.gotoAndPlay("mensaje");
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(10).call(this.frame_34).wait(11).call(this.frame_45).wait(1));

	// Capa_3
	this.btn_inicio3 = new lib.Símbolo5();
	this.btn_inicio3.name = "btn_inicio3";
	this.btn_inicio3.setTransform(555.45,1188.75,0.7556,0.7556,0,0,0,377.4,119.5);
	new cjs.ButtonHelper(this.btn_inicio3, 0, 1, 2, false, new lib.Símbolo5(), 3);

	this.btn_inicio = new lib.Símbolo5();
	this.btn_inicio.name = "btn_inicio";
	this.btn_inicio.setTransform(555.45,983.9,0.7556,0.7556,0,0,0,377.4,119.5);
	new cjs.ButtonHelper(this.btn_inicio, 0, 1, 2, false, new lib.Símbolo5(), 3);

	this.btn_inicio2 = new lib.Símbolo5();
	this.btn_inicio2.name = "btn_inicio2";
	this.btn_inicio2.setTransform(520.85,1546.4,1,1,0,0,0,377.4,119.5);
	new cjs.ButtonHelper(this.btn_inicio2, 0, 1, 2, false, new lib.Símbolo5(), 3);

	this.instance = new lib.Símbolo13();
	this.instance.setTransform(540,958.4,1,1,0,0,0,476.3,714.3);

	this.btn_inicio4 = new lib.Símbolo5();
	this.btn_inicio4.name = "btn_inicio4";
	this.btn_inicio4.setTransform(520.85,1546.4,1,1,0,0,0,377.4,119.5);
	new cjs.ButtonHelper(this.btn_inicio4, 0, 1, 2, false, new lib.Símbolo5(), 3);

	this.instance_1 = new lib.Símbolo13copia();
	this.instance_1.setTransform(540,958.4,1,1,0,0,0,476.3,714.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_inicio},{t:this.btn_inicio3}]},24).to({state:[]},1).to({state:[{t:this.instance},{t:this.btn_inicio2}]},9).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.btn_inicio4}]},10).wait(1));

	// Layer_1
	this.instance_2 = new lib.Interpolación1("synched",0);
	this.instance_2.setTransform(540,1011.75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:890.95,alpha:1},10).to({y:969.15,alpha:0},5).to({_off:true},1).wait(5).to({_off:false,y:890.95,alpha:1},0).to({y:969.15,alpha:0},5).to({_off:true},1).wait(5));

	// Layer_1
	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(539.9,629.1,2.6732,2.6732,0,0,0,144.2,47.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regY:47.8,scaleX:1,scaleY:1,x:539.95,y:628.8,alpha:1},10).to({y:591.4},5).to({regX:144.3,scaleX:2.2055,scaleY:2.2055,x:540.15,y:628.8,alpha:0},5).to({_off:true},1).wait(5).to({_off:false,regX:144.2,scaleX:1,scaleY:1,x:539.95,y:591.4,alpha:1},0).to({regX:144.3,scaleX:2.2055,scaleY:2.2055,x:540.15,y:628.8,alpha:0},5).to({_off:true},1).wait(5));

	// Capa_9
	this.instance_4 = new lib.Símbolo11();
	this.instance_4.setTransform(544.4,2077.75,1,1,0,0,0,503.4,158.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:559.25,y:1757.6,alpha:1},9).wait(15).to({y:2123.3},9).to({_off:true},1).wait(1).to({_off:false,y:1757.6},0).to({y:2123.3},9).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_5 = new lib.ClipGroup_4();
	this.instance_5.setTransform(569.1,-146.1,1,1,0,0,0,569.1,165.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({y:141.45,alpha:1},10).wait(10).to({y:-166.15},9).to({_off:true},1).wait(1).to({_off:false,y:141.45},0).to({y:-166.15},9).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_6 = new lib.ClipGroup_5();
	this.instance_6.setTransform(544.3,959.55,1,1,0,0,0,1116.5,996);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,628.1,1693.1000000000001,1653.5);
// library properties:
lib.properties = {
	id: '19FC1578D314D446832F9FC32AF8DE19',
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1730384810570", id:"Image"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['19FC1578D314D446832F9FC32AF8DE19'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;