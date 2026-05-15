export default function Sidebar() {
  return (
    <div>
      {/* Categories Widget */}
      <div style={{ 
        background: 'white', 
        border: '1px solid #e0e0e0', 
        marginBottom: '20px',
        borderRadius: '3px'
      }}>
        <div style={{ 
          background: '#d32f2f', 
          color: 'white', 
          padding: '10px 15px',
          fontWeight: 'bold',
          fontSize: '15px'
        }}>
          కేటగిరీలు
        </div>
        
        <div style={{ padding: '5px 0' }}>
          {[
            { name: 'మార్గదర్శిని ( గైడ్ )', count: 15 },
            { name: 'ఎలా ?', count: 12 },
            { name: 'వార్తా విశ్లేషణ', count: 8 },
            { name: 'కొత్త ఉత్పత్తులు', count: 10 },
            { name: 'టెక్నాలజీ న్యూస్', count: 20 },
            { name: 'మొబైల్ టిప్స్', count: 7 },
          ].map((cat, i) => (
            <a 
              key={i}
              href="#"
              style={{ 
                padding: '10px 15px',
                borderBottom: i < 5 ? '1px solid #f0f0f0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#444',
                fontSize: '13px'
              }}
            >
              <span>{cat.name}</span>
              <span style={{ 
                background: '#f5f5f5', 
                padding: '3px 10px', 
                borderRadius: '3px', 
                fontSize: '11px',
                color: '#888'
              }}>
                {cat.count}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Recent Posts Widget */}
      <div style={{ 
        background: 'white', 
        border: '1px solid #e0e0e0', 
        marginBottom: '20px',
        borderRadius: '3px'
      }}>
        <div style={{ 
          background: '#d32f2f', 
          color: 'white', 
          padding: '10px 15px',
          fontWeight: 'bold',
          fontSize: '15px'
        }}>
          ఇటీవలి వ్యాసాలు
        </div>
        <div style={{ padding: '15px' }}>
          {[
            'ఏమిటీ వాట్సాప్ వ్యూ వన్స్ ఫీచర్',
            'పాన్ కార్డ్ మార్పులు సింపుల్ గైడ్',
            'ట్విటర్ వాయిస్ ట్వీట్స్ గైడ్',
            'స్మార్ట్వాచ్ బెస్ట్ ఆప్షన్లు',
            'జియోఫోన్ నెక్స్ట్ విశ్లేషణ'
          ].map((title, i) => (
            <a 
              key={i}
              href="#"
              style={{
                display: 'block',
                padding: '8px 0',
                borderBottom: i < 4 ? '1px solid #f5f5f5' : 'none',
                color: '#444',
                textDecoration: 'none',
                fontSize: '13px'
              }}
            >
              ► {title}
            </a>
          ))}
        </div>
      </div>
      
      {/* Facebook Widget */}
      <div style={{ 
        background: 'white', 
        border: '1px solid #e0e0e0',
        borderRadius: '3px'
      }}>
        <div style={{ 
          background: '#3b5998', 
          color: 'white', 
          padding: '10px 15px',
          fontWeight: 'bold',
          fontSize: '15px'
        }}>
          Facebook
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <a 
            href="https://www.facebook.com/computervignanam"
            target="_blank"
            style={{
              background: '#3b5998',
              color: 'white',
              padding: '10px 30px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '14px',
              display: 'inline-block',
              fontWeight: 'bold'
            }}
          >
            Follow @ComputerVignanam
          </a>
        </div>
      </div>
    </div>
  )
}