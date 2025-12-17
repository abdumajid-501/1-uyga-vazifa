function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "16px",
        background: "linear-gradient(135deg, #1f2937, #2d2a55)",
        color: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <aside>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>
          Copyright © {new Date().getFullYear()} – All rights reserved by ACME Industries Ltd
        </p>
      </aside>
    </footer>
  )
}

export default Footer
