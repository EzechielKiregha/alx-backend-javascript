interface MajorCredits {
	credits: number
	_majorCredits : any
}

interface MinorCredits{
	credits : number
	minorCrefit: any
}

function sumMajorCredits(subject1: MinorCredits, subject2: MinorCredits) :number{
	return subject1.credits + subject2.credits;

}

function sumMinorCredits(subject1: MajorCredits, subject2: MajorCredits) :number{
	return subject1.credits + subject2.credits;

}