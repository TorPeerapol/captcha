function Captcha(){
	this.echo = function(pattern,operator,leftOperand,rightOperand){
		return "ONE + 1";
	}
}
describe("Captcha()",function() {
	var captcha = new Captcha();
	it('shold "ONE + 1" ',function(){
		expect(captcha.echo(2,1,1,1)).toEqual("ONE + 1");
	});
});