const isAllowedFullscreen = true;

const styles = { margin: 'auto', marginTop: '3rem' };

export default function DashboardTopstreamPowerBi() {
  return (
    <iframe
      title="Topstream demo"
      style={styles}
      width="1800px"
      height="1200px"
      src="https://app.powerbi.com/view?r=eyJrIjoiNDdiZGE0M2EtMDk0OS00MjQxLWI1N2QtYzU1NDM4NDYzMGFhIiwidCI6IjZlNDRlNGNmLWI0NDUtNDhlNC1iODQwLTIyYzUwMTcyYTQ3ZCJ9&pageName=ae18a507f1f63def2ad3"
      allowFullScreen={isAllowedFullscreen}
    ></iframe>
  );
}
