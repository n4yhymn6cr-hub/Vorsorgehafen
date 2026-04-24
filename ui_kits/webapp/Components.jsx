// Vorsorgehafen — Shared Components
// Exported to window for use in other scripts

const VH_COLORS = {
  tiefblau:    '#1B3150',
  hafenblau:   '#2C5282',
  himmel:      '#5A89B8',
  watt:        '#D6E4F0',
  wattLight:   '#EBF4FB',
  leuchtfeuer: '#C0873A',
  leuchtfeuerLt:'#F2DEB0',
  nebel:       '#F6F8FB',
  sand:        '#F0ECE4',
  white:       '#FFFFFF',
  fg1:         '#1A2535',
  fg2:         '#4A5568',
  fg3:         '#8A96A3',
  border:      '#D1DCE8',
  success:     '#2F855A',
  successLt:   '#C6F6D5',
  error:       '#C53030',
  errorLt:     '#FED7D7',
};

// ── Button ─────────────────────────────────────────────
function VHButton({ children, variant = 'primary', size = 'md', onClick, fullWidth, disabled }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: '6px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
    borderRadius: '8px', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 200ms', lineHeight: 1, opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : undefined,
  };
  const sizes = { sm: { padding: '7px 14px', fontSize: '12px' }, md: { padding: '10px 20px', fontSize: '14px' }, lg: { padding: '13px 28px', fontSize: '16px' } };
  const variants = {
    primary:   { background: VH_COLORS.tiefblau,    color: 'white' },
    secondary: { background: VH_COLORS.wattLight,   color: VH_COLORS.hafenblau },
    ghost:     { background: 'transparent', color: VH_COLORS.hafenblau, border: `1.5px solid ${VH_COLORS.border}` },
    accent:    { background: VH_COLORS.leuchtfeuer,  color: 'white' },
  };
  return (
    <button style={{ ...base, ...sizes[size], ...variants[variant] }} onClick={!disabled ? onClick : undefined}>
      {children}
    </button>
  );
}

// ── Badge ───────────────────────────────────────────────
function VHBadge({ children, color = 'blue' }) {
  const colors = {
    blue:  { bg: VH_COLORS.watt,       text: VH_COLORS.hafenblau },
    green: { bg: VH_COLORS.successLt,  text: VH_COLORS.success },
    amber: { bg: VH_COLORS.leuchtfeuerLt, text: '#9A6A28' },
    red:   { bg: VH_COLORS.errorLt,    text: VH_COLORS.error },
    dark:  { bg: VH_COLORS.tiefblau,   text: 'white' },
  };
  const c = colors[color] || colors.blue;
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:'4px', fontSize:'11px', fontWeight:600, padding:'3px 10px', borderRadius:'999px', background:c.bg, color:c.text }}>
      <span style={{ width:5, height:5, borderRadius:'50%', background:c.text, opacity:.8 }}></span>
      {children}
    </span>
  );
}

// ── Stat Card ───────────────────────────────────────────
function VHStatCard({ label, value, unit, sub, color, trend }) {
  return (
    <div style={{ background:'white', borderRadius:'14px', padding:'20px', boxShadow:`0 1px 3px rgba(27,49,80,0.08)`, borderTop:`3px solid ${color || VH_COLORS.hafenblau}` }}>
      <div style={{ fontSize:'10px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:VH_COLORS.fg3, marginBottom:'8px' }}>{label}</div>
      <div style={{ fontFamily:"'DM Mono', monospace", fontSize:'28px', color: color || VH_COLORS.tiefblau, lineHeight:1 }}>{value}</div>
      {unit && <div style={{ fontSize:'12px', color:VH_COLORS.fg3, marginTop:'4px' }}>{unit}</div>}
      {sub && <div style={{ fontSize:'12px', color:VH_COLORS.fg2, marginTop:'8px' }}>{sub}</div>}
      {trend && <div style={{ fontSize:'11px', fontWeight:600, color:VH_COLORS.success, marginTop:'8px' }}>{trend}</div>}
    </div>
  );
}

// ── Progress Bar ────────────────────────────────────────
function VHProgress({ value, max = 100, color, label, sublabel }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div>
      {label && (
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
          <span style={{ fontSize:'13px', fontWeight:500, color:VH_COLORS.fg1 }}>{label}</span>
          <span style={{ fontSize:'13px', color:VH_COLORS.fg3 }}>{sublabel || `${Math.round(pct)}%`}</span>
        </div>
      )}
      <div style={{ height:'6px', background:VH_COLORS.watt, borderRadius:'999px', overflow:'hidden' }}>
        <div style={{ height:'100%', width:`${pct}%`, background: color || VH_COLORS.hafenblau, borderRadius:'999px', transition:'width 600ms cubic-bezier(0.25,0.46,0.45,0.94)' }}></div>
      </div>
    </div>
  );
}

// ── Sidebar ─────────────────────────────────────────────
function VHSidebar({ activeScreen, onNavigate }) {
  const navItems = [
    { id:'dashboard', icon:'layout-dashboard', label:'Übersicht' },
    { id:'plan',      icon:'target',           label:'Mein Plan' },
    { id:'analyse',   icon:'bar-chart-2',      label:'Analyse' },
    { id:'dokumente', icon:'file-text',         label:'Dokumente' },
    { id:'settings',  icon:'settings',          label:'Einstellungen' },
  ];
  return (
    <div style={{ width:'220px', flexShrink:0, background:VH_COLORS.tiefblau, height:'100vh', display:'flex', flexDirection:'column', padding:'0' }}>
      {/* Logo area */}
      <div style={{ padding:'24px 20px 20px', borderBottom:`1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
          <img src="../../assets/logo-icon.svg" alt="icon" style={{ width:32, height:32 }} />
          <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'18px', fontWeight:500, color:'white', letterSpacing:'-0.01em' }}>Vorsorgehafen</span>
        </div>
      </div>
      {/* Nav */}
      <nav style={{ flex:1, padding:'16px 12px', display:'flex', flexDirection:'column', gap:'2px' }}>
        {navItems.map(item => {
          const active = activeScreen === item.id;
          return (
            <button key={item.id} onClick={() => onNavigate(item.id)} style={{ display:'flex', alignItems:'center', gap:'10px', padding:'10px 12px', borderRadius:'8px', border:'none', cursor:'pointer', background: active ? 'rgba(255,255,255,0.10)' : 'transparent', color: active ? 'white' : 'rgba(255,255,255,0.55)', fontFamily:"'DM Sans',sans-serif", fontSize:'13px', fontWeight: active ? 500 : 400, textAlign:'left', width:'100%', transition:'all 150ms' }}>
              <i data-lucide={item.icon} style={{ width:16, height:16, flexShrink:0 }}></i>
              {item.label}
            </button>
          );
        })}
      </nav>
      {/* User */}
      <div style={{ padding:'16px 20px', borderTop:`1px solid rgba(255,255,255,0.08)`, display:'flex', alignItems:'center', gap:'10px' }}>
        <div style={{ width:32, height:32, borderRadius:'50%', background:VH_COLORS.himmel, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:600, color:'white' }}>MK</div>
        <div>
          <div style={{ fontSize:'12px', fontWeight:500, color:'white' }}>Max Kellner</div>
          <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)' }}>max@example.de</div>
        </div>
      </div>
    </div>
  );
}

// ── Top Bar ─────────────────────────────────────────────
function VHTopBar({ title, subtitle }) {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 32px', background:VH_COLORS.white, borderBottom:`1px solid ${VH_COLORS.border}`, flexShrink:0 }}>
      <div>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:500, color:VH_COLORS.fg1, lineHeight:1.2 }}>{title}</div>
        {subtitle && <div style={{ fontSize:'13px', color:VH_COLORS.fg3, marginTop:'2px' }}>{subtitle}</div>}
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
        <button style={{ background:'none', border:`1.5px solid ${VH_COLORS.border}`, borderRadius:'8px', padding:'7px', cursor:'pointer', display:'flex', alignItems:'center' }}>
          <i data-lucide="bell" style={{ width:16, height:16, color:VH_COLORS.fg3 }}></i>
        </button>
        <VHBadge color="green">Alles aktuell</VHBadge>
      </div>
    </div>
  );
}

// ── Info Box ────────────────────────────────────────────
function VHInfoBox({ icon, title, body, color = 'amber' }) {
  const colors = {
    amber: { bg: VH_COLORS.leuchtfeuerLt, border: VH_COLORS.leuchtfeuer, text: '#7A5020' },
    blue:  { bg: VH_COLORS.wattLight, border: VH_COLORS.hafenblau, text: VH_COLORS.hafenblau },
    green: { bg: VH_COLORS.successLt, border: VH_COLORS.success, text: VH_COLORS.success },
  };
  const c = colors[color];
  return (
    <div style={{ background:c.bg, border:`1px solid ${c.border}30`, borderLeft:`3px solid ${c.border}`, borderRadius:'10px', padding:'14px 16px', display:'flex', gap:'12px', alignItems:'flex-start' }}>
      {icon && <i data-lucide={icon} style={{ width:16, height:16, color:c.border, flexShrink:0, marginTop:'2px' }}></i>}
      <div>
        {title && <div style={{ fontSize:'13px', fontWeight:600, color:VH_COLORS.fg1, marginBottom:'3px' }}>{title}</div>}
        <div style={{ fontSize:'12px', color:VH_COLORS.fg2, lineHeight:1.5 }}>{body}</div>
      </div>
    </div>
  );
}

// Export to window
Object.assign(window, {
  VH_COLORS, VHButton, VHBadge, VHStatCard, VHProgress, VHSidebar, VHTopBar, VHInfoBox
});
