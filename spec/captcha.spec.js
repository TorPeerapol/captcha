var operator = ['+','-'];
var charOperand = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
var intOperand = ['0','1','2','3','4','5','6','7','8','9'];

function pattern1(o,l,r){
	this.echo = function(o,l,r){
		return intOperand[l]+" "+operator[o-1]+" "+charOperand[r];
	}
}

function pattern2(o,l,r){
	this.echo = function(o,l,r){
		return charOperand[l]+" "+operator[o-1]+" "+intOperand[r];
	}
}

function Captcha(){

	this.echo = function(p,o,l,r){
		if(p === 1){
			var p = new pattern1();
			return p.echo(o,l,r);
		}else if(p === 2){
			var p = new pattern2();
			return p.echo(o,l,r);
		}
	}
}

describe("Captcha()",function() {
	var captcha = new Captcha();
	it('shold "1 + ONE" ',function(){
		expect(captcha.echo(1,1,1,1)).toBe("1 + ONE");
	});
	it('shold "1 + TWO" ',function(){
		expect(captcha.echo(1,1,1,2)).toBe("1 + TWO");
	});
	it('shold "1 + THREE" ',function(){
		expect(captcha.echo(1,1,1,3)).toBe("1 + THREE");
	});
	it('shold "1 + FOUR" ',function(){
		expect(captcha.echo(1,1,1,4)).toBe("1 + FOUR");
	});


	it('shold "ONE - 1" ',function(){
		expect(captcha.echo(2,2,1,1)).toBe("ONE - 1");
	});
});
