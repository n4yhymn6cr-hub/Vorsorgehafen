// Vorsorgehafen — Onboarding Flow

function OnboardingScreen({ onComplete }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({ geburtsjahr: '1985', einkommen: '3500', situation: '', ziel: '' });

  const steps = [
    { id: 'situation', label: 'Deine Situation', num: '01' },
    { id: 'ziele',     label: 'Deine Ziele',     num: '02' },
    { id: 'einkommen', label: 'Dein Einkommen',  num: '03' },
    { id: 'ergebnis',  label: 'Dein Plan',        num: '04' },
  ];

  const situations = [
    { id: 'start',     label: 'Ich starte gerade', sub: 'Noch keine Vorsorge vorhanden' },
    { id: 'lücke',     label: 'Ich habe eine Lücke', sub: 'Erste Bausteine, aber unsicher ob ausreichend' },
    { id: 'optimieren',label: 'Ich möchte optimieren', sub: 'Vorsorge vorhanden, will mehr herausnehmen' },
  ];

  const ziele = [
    { id: 'sicherheit', label: 'Finanzielle Sicherheit', sub: 'Absicherung im Alter, kein Risiko' },
    { id: 'wachstum',   label: 'Vermögensaufbau', sub: 'Langfristiger Aufbau mit moderatem Risiko' },
    { id: 'flexibel',   label: 'Flexibel bleiben', sub: 'Liquidität behalten, trotzdem vorsorgen' },
  ];

  const inputStyle = { fontFamily:"'DM Sans',sans-serif", fontSize:'15px', padding:'11px 14px', border:`1.5px solid ${VH_COLORS.border}`, borderRadius:'10px', background:'white', color:VH_COLORS.fg1, outline:'none', width:'100%', transition:'border-color 200ms ease-out' };

  const optionStyle = (selected) => ({
    padding:'16px 18px', border:`1.5px solid ${selected ? VH_COLORS.hafenblau : VH_COLORS.border}`,
    borderRadius:'12px', cursor:'pointer', background: selected ? VH_COLORS.wattLight : 'white',
    transition:'all 200ms', display:'flex', alignItems:'flex-start', gap:'12px'
  });

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:VH_COLORS.nebel, padding:'32px' }}>
      <div style={{ width:'100%', maxWidth:'520px' }}>

        {/* Logo */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'32px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            <img src="../../assets/logo-icon.svg" alt="icon" style={{ width:36, height:36 }} />
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:500, color:VH_COLORS.tiefblau }}>Vorsorgehafen</span>
          </div>
        </div>

        {/* Step indicator */}
        <div style={{ display:'flex', gap:'6px', marginBottom:'28px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ flex:1, height:'3px', borderRadius:'999px', background: i <= step ? VH_COLORS.hafenblau : VH_COLORS.watt, transition:'background 400ms' }}></div>
          ))}
        </div>

        {/* Card */}
        <div style={{ background:'white', borderRadius:'18px', padding:'32px', boxShadow:`0 4px 24px rgba(27,49,80,0.10)` }}>
          <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:VH_COLORS.fg3, marginBottom:'8px' }}>{steps[step].num} von {steps.length}</div>

          {/* Step 0: Situation */}
          {step === 0 && (
            <>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:500, color:VH_COLORS.fg1, marginBottom:'6px', lineHeight:1.2 }}>Wie ist deine aktuelle Vorsorge-Situation?</h2>
              <p style={{ fontSize:'14px', color:VH_COLORS.fg3, marginBottom:'22px', lineHeight:1.6 }}>So können wir deinen Plan richtig einschätzen.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {situations.map(s => (
                  <div key={s.id} style={optionStyle(answers.situation === s.id)} onClick={() => setAnswers(a => ({...a, situation: s.id}))}>
                    <div style={{ width:18, height:18, borderRadius:'50%', border:`1.5px solid ${answers.situation === s.id ? VH_COLORS.hafenblau : VH_COLORS.border}`, flexShrink:0, marginTop:2, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      {answers.situation === s.id && <div style={{ width:8, height:8, borderRadius:'50%', background:VH_COLORS.hafenblau }}></div>}
                    </div>
                    <div>
                      <div style={{ fontSize:'14px', fontWeight:600, color:VH_COLORS.fg1 }}>{s.label}</div>
                      <div style={{ fontSize:'12px', color:VH_COLORS.fg3, marginTop:'2px' }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 1: Ziele */}
          {step === 1 && (
            <>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:500, color:VH_COLORS.fg1, marginBottom:'6px', lineHeight:1.2 }}>Was ist dir bei deiner Vorsorge am wichtigsten?</h2>
              <p style={{ fontSize:'14px', color:VH_COLORS.fg3, marginBottom:'22px', lineHeight:1.6 }}>Dein Ziel bestimmt, welche Bausteine am besten zu dir passen.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {ziele.map(z => (
                  <div key={z.id} style={optionStyle(answers.ziel === z.id)} onClick={() => setAnswers(a => ({...a, ziel: z.id}))}>
                    <div style={{ width:18, height:18, borderRadius:'50%', border:`1.5px solid ${answers.ziel === z.id ? VH_COLORS.hafenblau : VH_COLORS.border}`, flexShrink:0, marginTop:2, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      {answers.ziel === z.id && <div style={{ width:8, height:8, borderRadius:'50%', background:VH_COLORS.hafenblau }}></div>}
                    </div>
                    <div>
                      <div style={{ fontSize:'14px', fontWeight:600, color:VH_COLORS.fg1 }}>{z.label}</div>
                      <div style={{ fontSize:'12px', color:VH_COLORS.fg3, marginTop:'2px' }}>{z.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Einkommen */}
          {step === 2 && (
            <>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:500, color:VH_COLORS.fg1, marginBottom:'6px', lineHeight:1.2 }}>Erzähl uns etwas über dich</h2>
              <p style={{ fontSize:'14px', color:VH_COLORS.fg3, marginBottom:'22px', lineHeight:1.6 }}>Diese Angaben bleiben bei dir und helfen uns, deinen Plan zu berechnen.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
                {[
                  { label:'Geburtsjahr', key:'geburtsjahr', placeholder:'z.B. 1985' },
                  { label:'Monatliches Nettoeinkommen (€)', key:'einkommen', placeholder:'z.B. 3.500' },
                ].map(field => (
                  <div key={field.key}>
                    <div style={{ fontSize:'13px', fontWeight:500, color:VH_COLORS.fg1, marginBottom:'6px' }}>{field.label}</div>
                    <input
                      style={inputStyle}
                      value={answers[field.key]}
                      placeholder={field.placeholder}
                      onChange={e => setAnswers(a => ({...a, [field.key]: e.target.value}))}
                      onFocus={e => e.target.style.borderColor = VH_COLORS.hafenblau}
                      onBlur={e => e.target.style.borderColor = VH_COLORS.border}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 3: Result */}
          {step === 3 && (
            <>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:500, color:VH_COLORS.fg1, marginBottom:'6px', lineHeight:1.2 }}>Dein persönlicher Vorsorgeplan</h2>
              <p style={{ fontSize:'14px', color:VH_COLORS.fg3, marginBottom:'22px', lineHeight:1.6 }}>Basierend auf deinen Angaben haben wir deinen Startplan ermittelt.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                <div style={{ background:VH_COLORS.nebel, borderRadius:'10px', padding:'16px' }}>
                  <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:VH_COLORS.fg3, marginBottom:'6px' }}>Empfohlene Sparrate</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'32px', color:VH_COLORS.tiefblau }}>€ 280 <span style={{ fontSize:'14px', color:VH_COLORS.fg3 }}>/ Monat</span></div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
                  <div style={{ background:VH_COLORS.wattLight, borderRadius:'10px', padding:'14px' }}>
                    <div style={{ fontSize:'11px', color:VH_COLORS.fg3, marginBottom:'4px' }}>Versorgungslücke</div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'18px', color:VH_COLORS.leuchtfeuer }}>€ 840 / Mo.</div>
                  </div>
                  <div style={{ background:VH_COLORS.successLt, borderRadius:'10px', padding:'14px' }}>
                    <div style={{ fontSize:'11px', color:VH_COLORS.fg3, marginBottom:'4px' }}>Abdeckungsgrad</div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'18px', color:VH_COLORS.success }}>64 %</div>
                  </div>
                </div>
                <VHInfoBox icon="anchor" body="Gut angefangen. Mit dem richtigen Plan bist du auf dem Weg zu einem sicheren Ruhestand." color="blue" />
              </div>
            </>
          )}

          {/* Navigation */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'28px' }}>
            {step > 0
              ? <button onClick={() => setStep(s => s-1)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'13px', color:VH_COLORS.fg3, fontFamily:"'DM Sans',sans-serif" }}>← Zurück</button>
              : <span></span>
            }
            {step < steps.length - 1
              ? <VHButton variant="primary" onClick={() => setStep(s => s+1)}>Weiter</VHButton>
              : <VHButton variant="primary" onClick={onComplete}>Zum Dashboard</VHButton>
            }
          </div>
        </div>

        {/* Trust signal */}
        <div style={{ textAlign:'center', marginTop:'20px', fontSize:'12px', color:VH_COLORS.fg3 }}>
          Deine Daten werden nicht gespeichert oder weitergegeben.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { OnboardingScreen });
