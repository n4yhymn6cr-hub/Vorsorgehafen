// Vorsorgehafen — Dashboard Screen

function DashboardScreen({ onNavigate }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const provisions = [
    { name: 'ETF-Sparplan', provider: 'Comdirect', monthly: '€ 150', total: '€ 18.450', pct: 62, color: VH_COLORS.hafenblau },
    { name: 'Riester-Rente', provider: 'DWS', monthly: '€ 80', total: '€ 9.600', pct: 38, color: VH_COLORS.himmel },
    { name: 'Betriebsrente', provider: 'Arbeitgeber AG', monthly: '€ 50', total: '€ 3.200', pct: 20, color: VH_COLORS.leuchtfeuer },
  ];

  return (
    <div style={{ flex:1, overflow:'auto', background:VH_COLORS.nebel }}>
      <VHTopBar title="Guten Morgen, Max" subtitle="Dein Vorsorgestand — April 2026" />
      <div style={{ padding:'28px 32px', display:'flex', flexDirection:'column', gap:'24px' }}>

        {/* Stat cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px' }}>
          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(6px)', transition:'all 400ms 0ms ease-out' }}>
            <VHStatCard label="Monatliche Sparrate" value="€ 280" sub="aus 3 Bausteinen" trend="↑ +€ 30 seit Januar" color={VH_COLORS.hafenblau} />
          </div>
          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(6px)', transition:'all 400ms 80ms ease-out' }}>
            <VHStatCard label="Gesamtvermögen" value="€ 31.250" sub="Vorsorge gesamt" color={VH_COLORS.tiefblau} />
          </div>
          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(6px)', transition:'all 400ms 160ms ease-out' }}>
            <VHStatCard label="Versorgungslücke" value="€ 840" unit="pro Monat im Ruhestand" color={VH_COLORS.leuchtfeuer} />
          </div>
          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(6px)', transition:'all 400ms 240ms ease-out' }}>
            <VHStatCard label="Zieldatum" value="2049" sub="23 Jahre bis zur Rente" color={VH_COLORS.success} />
          </div>
        </div>

        {/* Main grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:'14px', alignItems:'start' }}>

          {/* Left: provisions */}
          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            <div style={{ background:'white', borderRadius:'14px', padding:'22px', boxShadow:`0 1px 3px rgba(27,49,80,0.08)` }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'18px' }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:500, color:VH_COLORS.fg1 }}>Deine Vorsorgebausteine</div>
                <VHButton variant="ghost" size="sm" onClick={() => onNavigate('plan')}>Alle anzeigen</VHButton>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                {provisions.map((p, i) => (
                  <div key={i} style={{ padding:'16px', border:`1px solid ${VH_COLORS.border}`, borderRadius:'10px', cursor:'pointer', transition:'box-shadow 200ms' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow='0 4px 16px rgba(27,49,80,0.10)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow='none'}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'10px', alignItems:'flex-start' }}>
                      <div>
                        <div style={{ fontSize:'14px', fontWeight:600, color:VH_COLORS.fg1 }}>{p.name}</div>
                        <div style={{ fontSize:'12px', color:VH_COLORS.fg3, marginTop:'2px' }}>{p.provider}</div>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'15px', color:VH_COLORS.tiefblau }}>{p.total}</div>
                        <div style={{ fontSize:'11px', color:VH_COLORS.fg3, marginTop:'2px' }}>{p.monthly} / Monat</div>
                      </div>
                    </div>
                    <VHProgress value={p.pct} color={p.color} label="Zielerreichung" sublabel={`${p.pct}%`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Info box */}
            <VHInfoBox
              icon="lightbulb"
              title="Handlungsempfehlung"
              body="Du könntest deine Versorgungslücke um 40% reduzieren, indem du deine ETF-Sparrate um € 120 pro Monat erhöhst. Bei deinem Einkommen wäre das steuerlich sinnvoll."
              color="amber"
            />
          </div>

          {/* Right: sidebar panel */}
          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            {/* Score */}
            <div style={{ background:VH_COLORS.tiefblau, borderRadius:'14px', padding:'22px', color:'white' }}>
              <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:VH_COLORS.himmel, marginBottom:'12px' }}>Vorsorge-Score</div>
              <div style={{ display:'flex', alignItems:'flex-end', gap:'8px', marginBottom:'6px' }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'48px', lineHeight:1, color:'white' }}>72</div>
                <div style={{ fontSize:'16px', color:'rgba(255,255,255,0.45)', paddingBottom:'6px' }}>/100</div>
              </div>
              <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.60)', marginBottom:'14px' }}>Gut — Luft nach oben</div>
              <div style={{ height:'4px', background:'rgba(255,255,255,0.12)', borderRadius:'999px' }}>
                <div style={{ height:'100%', width:'72%', background:VH_COLORS.leuchtfeuer, borderRadius:'999px' }}></div>
              </div>
            </div>

            {/* Nächste Schritte */}
            <div style={{ background:'white', borderRadius:'14px', padding:'22px', boxShadow:`0 1px 3px rgba(27,49,80,0.08)` }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontWeight:500, color:VH_COLORS.fg1, marginBottom:'14px' }}>Nächste Schritte</div>
              {[
                { label:'ETF-Sparrate anpassen', done:false },
                { label:'Riester-Förderantrag prüfen', done:false },
                { label:'Bestandsaufnahme abgeschlossen', done:true },
              ].map((s, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'10px', padding:'9px 0', borderBottom: i < 2 ? `1px solid ${VH_COLORS.border}` : 'none' }}>
                  <div style={{ width:18, height:18, borderRadius:'50%', background: s.done ? VH_COLORS.successLt : VH_COLORS.watt, border:`1.5px solid ${s.done ? VH_COLORS.success : VH_COLORS.border}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    {s.done && <i data-lucide="check" style={{ width:10, height:10, color:VH_COLORS.success }}></i>}
                  </div>
                  <span style={{ fontSize:'12px', color: s.done ? VH_COLORS.fg3 : VH_COLORS.fg1, textDecoration: s.done ? 'line-through' : 'none' }}>{s.label}</span>
                </div>
              ))}
            </div>

            <VHButton variant="primary" fullWidth onClick={() => {}}>
              <i data-lucide="plus" style={{ width:14, height:14 }}></i>
              Baustein hinzufügen
            </VHButton>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DashboardScreen });
