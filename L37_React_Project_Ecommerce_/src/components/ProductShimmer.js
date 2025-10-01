

const ProductShimmer = ({ width = '100%', height = '150px', borderRadius = '8px' }) => {
  return (
    <>
      <style>{`
        .shimmer-wrapper {
          position: relative;
          overflow: hidden;
          background-color: #f6f7f8;
          border-radius: var(--border-radius, 8px);
        }
        .shimmer {
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            #f6f7f8 0%,
            #edeef1 20%,
            #f6f7f8 40%,
            #f6f7f8 100%
          );
          position: absolute;
          top: 0;
          left: -50%;
          animation: shimmer 1.5s infinite;
          border-radius: inherit;
        }
        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }
      `}</style>

      <div
        className="shimmer-wrapper"
        style={{ width, height, borderRadius }}
        aria-label="Loading content"
      >
        <div className="shimmer" />
      </div>
    </>
  );
};

export default ProductShimmer;
