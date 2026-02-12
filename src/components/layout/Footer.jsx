export default function Footer() {
  return (
    <footer style={styles.footer}>
      © 2026 My React App
    </footer>
  );
}

const styles = {
  footer: {
    height: "50px",
    background: "#1e293b",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
