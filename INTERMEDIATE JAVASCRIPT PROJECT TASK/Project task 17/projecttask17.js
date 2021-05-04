Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@harsh9051 
Satyamtechy
/
intern-projectt
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
intern-projectt/INTERMEDIATE JAVASCRIPT PROJECT TASK/Project Task 17/Projectask17.js /
@Satyamtechy
Satyamtechy second
Latest commit 91370a8 9 hours ago
 History
 1 contributor
69 lines (56 sloc)  1.99 KB
  
class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
     return this._name;
    }
    
    get level(){
      return this._level;
    }
    
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
        if(typeof newNumberOfStudents==='number'){
            this._numberOfStudents-newNumberOfStudents;
        }
        else{
            console.log(`Invalid input: numberOfStudents must be set to a Number.`);
            return 'Invalid input: numberOfStudents must be set to a Number.';
        }
    }

    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents}, typically between the ages of ${this.level}.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
        let random = Math.floor(substituteTeachers.length*Math.random()-1);
        return substituteTeachers[random];
    }
};

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name,'primary',numberOfStudents);
        this._pickupPolicy=pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportsTeams;
    }
}

console.log(HighSchool.sportsTeams);

const LorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

console.log(lorraineHansbury.quickFacts());
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);
