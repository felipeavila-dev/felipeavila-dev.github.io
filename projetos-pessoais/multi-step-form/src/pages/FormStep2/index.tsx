import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions} from '../../contexts/FormContext';
import  { SelectOption } from '../../components/SelectOption';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    
    useEffect(() => {
        if( state.name !== '') {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });            
        } else {
            navigate('/');
        }
    }, []);

    const handleSetLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step3');
        } else {
            alert( 'Preencha os dados necessários' );
        }
    }
   
    return (
        <Theme>
            <C.Container>
                <p>Passo { state.currentStep } / 3</p>
                <h1><span>{ state.name }</span>, como voce se define?</h1>
                <p>Escolha a opção que descreve sua jornada no desenvolvimento</p>

                <hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programas há menos de 2 anos"
                    icon='🤓'
                    selected={ state.level === 0 }
                    onClick={ () => handleSetLevel(0) }
                />

                 <SelectOption 
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon='😎'
                    selected={ state.level === 1 }
                    onClick={ () => handleSetLevel(1) }
                />

                <Link className='backBtn' to='/'> Voltar </Link>
                <button onClick={handleNextStep}>
                    Próximo
                </button>


            </C.Container>
        </Theme>
    );
}
