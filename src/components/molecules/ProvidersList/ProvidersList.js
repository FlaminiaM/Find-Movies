import './ProvidersList.scss';

import Provider from '../../atoms/Provider/Provider';

function ProvidersList({providerType, providers}) {
    return (
        <div className='providers-list-container'>
            <div className='providers-list__label'>{providerType}</div>
            <div className='providers-list'>
                {providers.map(provider => <Provider key={provider.provider_id} logo={provider.logo_path} name={provider.provider_name} />)}
            </div>
            
        </div>
    );
}

export default ProvidersList;
