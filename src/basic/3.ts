type Union = {
    a: string | number;
}

const unionType: Union = {a: 25};

type buttonType = 'enable' | 'disable';

let buttonStatus: buttonType;

buttonStatus = 'enable';
buttonStatus = 'disable';