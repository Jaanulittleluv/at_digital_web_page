import './body.css';
import Logo from './assets/images/Logo.svg'

function Footer() {
  return (
    <div style={{width: '100%', height: '100%', paddingTop: 40, paddingBottom: 20, paddingLeft: 80, paddingRight: 80, background: '#6B3CC9', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{width: 413, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
            <div style={{width: 400 , height: 50, position: 'relative'}}>
            <img class="logo" src={Logo} alt="Logo" />
            </div>
            
            <div style={{alignSelf: 'stretch', color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 128, display: 'flex'}}>
            <div style={{width: 197, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Our Technologies</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>ReactJS</div>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Gatsby</div>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>NextJS</div>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>NodeJS</div>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>GraphQL</div>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Laravel</div>
                </div>
            </div>
            <div style={{width: 197, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Our Services</div>
                <div style={{alignSelf: 'stretch', height: 150, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Social media Marketing</div>
                    <div style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Web & Mobile App Development</div>
                    <div style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Data & Analytics</div>
                    <div style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Google Marketing solutions</div>
                    <div style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Search Engine Optimization</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{height: 25, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 0, border: '1px white solid'}}></div>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Privacy Policy</div>
            <div style={{width: 16, height: 0, transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid'}}></div>
            <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>Terms & Conditions</div>
        </div>
    </div>
</div>

  );
}

export default  Footer;














