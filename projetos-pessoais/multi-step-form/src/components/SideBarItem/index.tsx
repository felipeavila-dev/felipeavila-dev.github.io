import { Link } from 'react-router-dom';
import * as C from './styles';
import { ReactComponent as PersonIcon } from '../../images/person.svg';
import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as LevelIcon } from '../../images/level.svg';


type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SideBarItem = ({ title, description, icon, path, active }: Props) => {
    return(
        <C.Container>
            <Link to={ path }>
                <C.Info>
                    <C.Title>{ title }</C.Title>
                    <C.Description>{ description }</C.Description>                  
                </C.Info>
                <C.IconArea active={active}>
                    { icon === 'profile' && 
                        <PersonIcon width={25} height={25} fill='white'/>
                    }
                    { icon === 'book' && 
                        <LevelIcon width={25} height={25} fill='white'/>
                    }
                    { icon === 'mail' && 
                        <EmailIcon width={25} height={25} fill='white'/>
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}