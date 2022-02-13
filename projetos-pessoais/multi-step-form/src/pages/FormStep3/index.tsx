import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions} from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    
    useEffect(() => {
       if( state.name !== '' ) {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
       } else {
           navigate('/');
       }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state);
            alert('Cadastro finalizado com sucesso!');
            window.location.reload();
        } else {
            alert('Preencha todos os campos')
        }
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleChangeGithub = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    
    return (
        <Theme>
            <C.Container>
                <p>Passo { state.currentStep } / 3</p>
                <h1>Maravilha, { state.name }. Esta é a última etapa.</h1>
                <p>Preencha o campos com seus contato e Github para que possamos te encontrar</p>

                <hr />

                <label>
                    Qual seu email?
                    <input 
                        type='text'
                        value={ state.email }
                        onChange={ handleChangeEmail }
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input 
                        type='text'
                        value={ state.github }
                        onChange={ handleChangeGithub }
                    />
                </label>

                <Link className='backBtn' to='/step2'> Voltar </Link>

                <button onClick={handleNextStep}>
                    Finalizar cadastro
                </button>

            </C.Container>
        </Theme>
    );
}
