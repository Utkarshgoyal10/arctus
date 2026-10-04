/* @ds-bundle: {"format":4,"namespace":"ArchanionDesignSystem_9f508c","components":[{"name":"AlertBanner","sourcePath":"components/core/AlertBanner.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SpecRow","sourcePath":"components/core/SpecRow.jsx"},{"name":"StatusChip","sourcePath":"components/core/StatusChip.jsx"},{"name":"StepBlock","sourcePath":"components/core/StepBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TrackGlyph","sourcePath":"components/core/TrackGlyph.jsx"}],"sourceHashes":{"components/core/AlertBanner.jsx":"89b449f8595d","components/core/Button.jsx":"0825e38011e6","components/core/SpecRow.jsx":"e1cc495abab2","components/core/StatusChip.jsx":"77c925040305","components/core/StepBlock.jsx":"2ab51e2bb394","components/core/Tag.jsx":"f162300919b5","components/core/TrackGlyph.jsx":"b6d94013f95a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArchanionDesignSystem_9f508c = window.ArchanionDesignSystem_9f508c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/AlertBanner.jsx
try { (() => {
function AlertBanner({
  level = 'hostile',
  children
}) {
  const colors = {
    hostile: 'var(--status-hostile)',
    unknown: 'var(--status-unknown)',
    live: 'var(--status-live)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--panel-1)',
      borderLeft: `3px solid ${colors[level] || colors.hostile}`,
      padding: '12px 16px',
      width: '100%'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-1)'
    }
  }, children));
}
Object.assign(__ds_scope, { AlertBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AlertBanner.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}) {
  const base = {
    fontFamily: 'var(--font-mono)',
    fontSize: size === 'sm' ? 11 : 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-1)',
    padding: size === 'sm' ? '8px 12px' : '12px 20px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--motion-fast) var(--motion-ease), opacity var(--motion-fast) var(--motion-ease)',
    opacity: disabled ? 0.4 : 1,
    display: 'inline-block'
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-ink)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-1)',
      border: '1px solid var(--border-2)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-2)'
    }
  };
  return React.createElement('button', {
    disabled,
    onClick,
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecRow.jsx
try { (() => {
function SpecRow({
  label,
  value,
  unit
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '8px 0',
      borderBottom: '1px solid var(--border-1)',
      gap: 16
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-2)'
    }
  }, label), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--text-1)',
      fontWeight: 500,
      textAlign: 'right'
    }
  }, value, unit ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-2)',
      marginLeft: 6
    }
  }, unit) : null));
}
Object.assign(__ds_scope, { SpecRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecRow.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusChip.jsx
try { (() => {
function StatusChip({
  status = 'live',
  label
}) {
  const map = {
    live: {
      color: 'var(--status-live)',
      text: label || 'LIVE'
    },
    degraded: {
      color: 'var(--status-unknown)',
      text: label || 'DEGRADED'
    },
    lost: {
      color: 'var(--status-hostile)',
      text: label || 'LOST LINK'
    },
    neutral: {
      color: 'var(--status-neutral)',
      text: label || 'STANDBY'
    }
  };
  const s = map[status] || map.live;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-2)'
    }
  }, React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.color,
      flexShrink: 0
    }
  }), s.text);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/core/StepBlock.jsx
try { (() => {
function StepBlock({
  number,
  title,
  children
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--accent)',
      letterSpacing: '0.08em',
      paddingTop: 2
    }
  }, number), React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      color: 'var(--text-1)',
      marginBottom: 4
    }
  }, title), children ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-2)',
      lineHeight: 1.5,
      maxWidth: 260
    }
  }, children) : null));
}
Object.assign(__ds_scope, { StepBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StepBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  size = 'md'
}) {
  const fs = size === 'sm' ? 11 : 12;
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-2)',
      border: '1px solid var(--border-1)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-1)',
      display: 'inline-block',
      lineHeight: 1.4
    }
  }, `[${children}]`);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TrackGlyph.jsx
try { (() => {
const AFFIL = {
  hostile: 'var(--status-hostile)',
  friendly: 'var(--status-friendly)',
  unknown: 'var(--status-unknown)',
  neutral: 'var(--status-neutral)'
};
function TrackGlyph({
  affiliation = 'unknown',
  id,
  alt,
  speed
}) {
  const c = AFFIL[affiliation] || AFFIL.unknown;
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('div', {
    style: {
      width: 16,
      height: 16,
      border: `2px solid ${c}`,
      transform: 'rotate(45deg)'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.04em',
      color: 'var(--text-2)',
      whiteSpace: 'nowrap'
    }
  }, id, alt ? ` · ${alt}` : '', speed ? ` · ${speed}` : ''));
}
Object.assign(__ds_scope, { TrackGlyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TrackGlyph.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AlertBanner = __ds_scope.AlertBanner;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SpecRow = __ds_scope.SpecRow;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.StepBlock = __ds_scope.StepBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TrackGlyph = __ds_scope.TrackGlyph;

})();
