
describe("Captcha()",function() {
	var captcha = new Captcha();
	it('shold "ONE + 1" ',function(){
		expect(captcha.echo(2,1,1,1)).toEqual("ONE + 1");
	});
});