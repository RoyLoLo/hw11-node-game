function cCard(text, cloze){
  this.cloze = cloze;
  this.text = text;
  this.partial = this.text.replace(this.cloze,"........");
};

module.exports =  cCard;