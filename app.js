let voters = [];
let democrat_candidates = [];
let republican_candidates = [];
let independent_candidates = [];
let ideologies = ['Conservative', 'Liberal', 'Neutral'];
let faker = [
    `Stephanie`,
    `Harry`,
    `Luis`,
    `John`,
    `Maurice`,
    `Flint`,
    `Richard`,
    `Brandon`,
    `Jane`,
    `Akil`,
    `Fiona`,
    `Eduard`,
    `Aisha`,
    `Kat`,
    `Ellie`,
    `Marry`,
    `Dakota`,
    `Rachal`,
    `Cletus`,
    `Karla`,
    `Chaya`,
    `Judi`,
    `Waldo`,
    `Tisa`,
    `Wynona`,
    `Shay`,
    `Meredith`,
    `Vincent`,
    `Jaymie`,
    `Don`,
    `Misvel`,
    `Deshawn`,
    `Fabrizio`,
    `Carletta`,
    `Brynn`,
    `Elina`,
    `Gertrude`,
    `Emelia`,
    `Audra`,
    `Sabrina`,
    `Kenia`,
    `Nathan`,
    `Karyn`,
    `Tova`,
    `Dia`,
    `Manual`,
    `Fransisca`,
    `Chelsie`,
    `Valerie`,
    `Emma`,
    `Matthew`
  ];
  
class Person{
    constructor(name){
        this.name = name;
    }
}

class Voter extends Person{
    constructor(name,ideology){
        super(name);
        this.ideology = ideology;
        voters.push(this);
    }
}
class Candidate extends Person{
    constructor(name,party){
        super(name);
        this.party = party;
        this.votes = 0;

        if (party == `Democrat`) {
            democrat_candidates.push(this);
          } else if (party == `Republican`) {
            republican_candidates.push(this);
          } else {
            independent_candidates.push(this);
          }
    }
}


$('#voter-form form').on('submit', function(event){
   event.preventDefault();
   let voter = new Voter($('#voter-name').val(),$('#voter-ideology').val());
   let li = '<li class="list-group-item">'+voter.name+' ---- '+voter.ideology+'</li>';
   $('#voter-list ul').append(li);
});

$('#candidate-form form').on('submit', function(event){
    event.preventDefault();
    let candidate = new Candidate($('#candidate-name').val(),$('#candidate-party').val());
    let li = '<li class="list-group-item">'+candidate.name+' ~~~~~ '+candidate.party+'</li>';
    $('#candidate-list ul').append(li);

 });

 $('#randomize-btn').on('click', function(event){
     event.preventDefault();
     faker.forEach(name =>{
        let voter = new Voter(name, ideologies[randomNumber(ideologies.length-1)]);
        let li = '<li class="list-group-item">'+voter.name+' ---- '+voter.ideology+'</li>';
        $('#voter-list ul').append(li);
     });
 });

 $('#vote-btn-div button').click(() =>{
    event.preventDefault();
    vote();
 })

function vote(){
    voters.forEach(voter => {
        let ideology = voter.ideology;
        switch(ideology){
            case 'Liberal':
                selectVote(0.6,0.8);
            break;
            case 'Neutral':
                selectVote(0.25,0.75);
            break;
            case 'Conservative':
                selectVote(0.2,0.4);
            break;
        }    
    });
    let = winnersVote = 0;
    let winner;
    let total_candidates = democrat_candidates.concat(independent_candidates).concat(republican_candidates); 
    total_candidates.forEach(candidate =>{
        
                if(candidate.votes >= winnersVote){
                    winnersVote = candidate.votes;
                    winner = candidate;
                }
    });
    alert(`The Winner is: `+winner.name);
}

function selectVote(num1,num2){
    let rand = Math.random();
    if(rand < num1 ){
        //voting democratic
        democrat_candidates[randomNumber(democrat_candidates.length-1)].votes++;
    }else if(rand < num2){
        //voting independent
        independent_candidates[randomNumber(independent_candidates.length-1)].votes++;
    }else{
        // voting republican.
        republican_candidates[randomNumber(republican_candidates.length-1)].votes++;
    }
}


  function randomNumber(number) {
    return Math.floor(Math.random() * number);
  }
