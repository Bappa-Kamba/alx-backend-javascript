(async () => {
  const { expect } = await import('chai');
  const calculateNumber = require('./2-calcul_chai');

  describe('calculateNumber', function() {
    describe('SUM', function() {
      it('should return 6 when inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
    });

    describe('SUBTRACT', function() {
      it('should return -4 when inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });

      it('should return 0 when inputs are 2.5 and 2.5', function() {
        expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
      });
    });

    describe('DIVIDE', function() {
      it('should return 0.2 when inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });

      it('should return "Error" when dividing by 0', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });

      it('should return "Error" when dividing by rounded 0', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
      });
    });

    describe('Invalid type', function() {
      it('should throw an error for an invalid type', function() {
        expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid type');
      });
    });
  });
})();
