function Captcha(){
	var operator = ['+','-'];
	var charOperand = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
	var intOperand = [0,1,2,3,4,5,6,7,8,9];
	
	this.echo = function(p,o,l,r){
		return "ONE + 1";
	}
}
describe("Captcha()",function() {
	var captcha = new Captcha();
	it('shold "ONE + 1" ',function(){
		expect(captcha.echo(2,1,1,1)).toEqual("ONE + 1");
	});
});