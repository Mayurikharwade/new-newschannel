import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post, isFirst }) {
  return (
    <div style={{ 
      padding: isFirst ? '0 0 15px 0' : '15px 0',
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      gap: '15px'
    }}>
      {/* Thumbnail Image */}
      <div style={{ width: '200px', flexShrink: 0 }}>
        <Image 
          src={post.image || 'https://picsum.photos/200/130'} 
          alt={post.title}
          width={200}
          height={130}
          style={{ 
            width: '100%', 
            height: '130px', 
            objectFit: 'cover',
            border: '1px solid #e0e0e0',
            padding: '3px',
            background: 'white'
          }}
          unoptimized
        />
      </div>
      
      {/* Content */}
      <div style={{ flex: 1 }}>
        {/* Meta Info */}
        <div style={{ marginBottom: '6px', fontSize: '11px', color: '#888' }}>
          <span style={{ fontWeight: 'bold', color: '#d32f2f' }}>
            {post.category} /
          </span>
          <span style={{ marginLeft: '8px' }}>
            🕒 {post.date}
          </span>
        </div>
        
        {/* Title */}
        <h3 style={{ 
          fontSize: '17px', 
          fontWeight: 'bold', 
          margin: '0 0 8px 0',
          lineHeight: '1.4',
          color: '#222'
        }}>
          <Link href={`/post/${post.slug}`} style={{ 
            textDecoration: 'none', 
            color: '#222'
          }}
          onMouseEnter={(e) => e.target.style.color = '#d32f2f'}
          onMouseLeave={(e) => e.target.style.color = '#222'}
          >
            {post.title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p style={{ 
          fontSize: '13px', 
          color: '#666', 
          lineHeight: '1.6',
          margin: '0 0 10px 0'
        }}>
          {post.excerpt}
        </p>
        
        {/* Read More Link */}
        <Link 
          href={`/post/${post.slug}`}
          style={{ 
            color: '#d32f2f', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            fontSize: '12px'
          }}
        >
          ఇంకా చదవండి →
        </Link>
      </div>
    </div>
  );
}