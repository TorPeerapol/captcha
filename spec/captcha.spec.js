function Captcha(){
	var operator = ['+','-'];
	var charOperand = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
	var intOperand = ['0','1','2','3','4','5','6','7','8','9'];

	this.pattern1 = function(o,l,r){
		return intOperand[l]+" "+operator[o-1]+" "+charOperand[r];
	}

	this.pattern2 = function(o,l,r){
		return charOperand[l]+" "+operator[o-1]+" "+intOperand[r];
	}

	this.echo = function(p,o,l,r){
		if(p === 1){
			return this.pattern1(o,l,r);
		}else if(p === 2){
			return this.pattern2(o,l,r);
		}
	}
}
describe("Captcha()",function() {
	var captcha = new Captcha();
	it('shold "1 + ONE" ',function(){
		expect(captcha.echo(1,1,1,1)).toEqual("1 + ONE");
	});
	it('shold "ONE - 1" ',function(){
		expect(captcha.echo(2,2,1,1)).toEqual("ONE - 1");
	});
});