export const blogPosts = [
  {
    id: "building-scalable-react-applications",
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for architecting large-scale React applications that can grow with your team and user base.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "React",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    slug: "building-scalable-react-applications",
    content: `# Building Scalable React Applications

Building scalable React applications is crucial for long-term success. Here are the key principles and practices I've learned over 9+ years of development.

## Architecture Principles

### Component Structure
- Keep components small and focused
- Use composition over inheritance
- Implement proper separation of concerns

### State Management
- Choose the right state management solution
- Avoid prop drilling with Context API
- Use Redux for complex state logic

## Performance Optimization

### Code Splitting
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));
\`\`\`

### Memoization
Use React.memo and useMemo strategically to prevent unnecessary re-renders.

## Best Practices

1. **Consistent folder structure**
2. **TypeScript for type safety**
3. **Comprehensive testing**
4. **Code reviews and documentation**

Building scalable applications requires discipline and adherence to proven patterns.`
  },
  {
    id: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization Techniques",
    excerpt: "Discover advanced techniques to optimize your Node.js applications for maximum performance and scalability.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Node.js",
    readTime: "12 min read",
    date: "Mar 10, 2024",
    slug: "nodejs-performance-optimization",
    content: `# Node.js Performance Optimization Techniques

Performance optimization in Node.js applications is essential for handling high traffic and providing excellent user experience.

## Memory Management

### Avoiding Memory Leaks
- Monitor memory usage with tools like clinic.js
- Properly handle event listeners
- Use weak references when appropriate

### Garbage Collection
Understanding V8's garbage collection helps optimize memory usage.

## Asynchronous Programming

### Event Loop Optimization
\`\`\`javascript
// Avoid blocking the event loop
setImmediate(() => {
  // CPU intensive task
});
\`\`\`

### Clustering
Utilize all CPU cores with the cluster module for better performance.

## Database Optimization

1. **Connection pooling**
2. **Query optimization**
3. **Indexing strategies**
4. **Caching layers**

These techniques have helped me scale applications to handle millions of requests.`
  },
  {
    id: "database-design-patterns",
    title: "Database Design Patterns for Web Applications",
    excerpt: "Explore common database design patterns and when to use them in your web applications for optimal performance.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Architecture",
    readTime: "10 min read",
    date: "Mar 5, 2024",
    slug: "database-design-patterns",
    content: `# Database Design Patterns for Web Applications

Effective database design is the foundation of any scalable web application. Here are the patterns I use most frequently.

## Common Patterns

### Repository Pattern
Abstracts data access logic and provides a more object-oriented view of the persistence layer.

### Unit of Work
Maintains a list of objects affected by a business transaction and coordinates writing out changes.

## NoSQL vs SQL

### When to Use MongoDB
- Flexible schema requirements
- Rapid prototyping
- Horizontal scaling needs

### When to Use PostgreSQL
- Complex relationships
- ACID compliance requirements
- Advanced querying needs

## Performance Considerations

\`\`\`sql
-- Proper indexing
CREATE INDEX idx_user_email ON users(email);
\`\`\`

### Caching Strategies
1. **Redis for session storage**
2. **Application-level caching**
3. **Database query caching**

Choose the right database pattern based on your specific use case and scalability requirements.`
  },
  {
    id: "implementing-cicd-pipelines",
    title: "Implementing CI/CD for Modern Web Applications",
    excerpt: "A comprehensive guide to setting up continuous integration and deployment pipelines for your web projects.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Architecture",
    readTime: "15 min read",
    date: "Feb 28, 2024",
    slug: "implementing-cicd-pipelines",
    content: `# Implementing CI/CD for Modern Web Applications

Continuous Integration and Deployment are essential for modern development workflows. Here's how to implement them effectively.

## CI/CD Pipeline Components

### Source Control Integration
- Git hooks for automated triggers
- Branch protection rules
- Code review requirements

### Automated Testing
\`\`\`yaml
# GitHub Actions example
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
\`\`\`

## Deployment Strategies

### Blue-Green Deployment
Reduces downtime by maintaining two identical production environments.

### Rolling Deployment
Gradually replaces instances of the previous version with the new version.

## Monitoring and Rollback

1. **Health checks**
2. **Performance monitoring**
3. **Automated rollback triggers**
4. **Alert systems**

A well-implemented CI/CD pipeline increases deployment frequency while reducing risk.`
  },
  {
    id: "advanced-react-hooks-patterns",
    title: "Advanced React Hooks Patterns",
    excerpt: "Master advanced React hooks patterns and learn how to create custom hooks for better code reusability.",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "React",
    readTime: "7 min read",
    date: "Feb 20, 2024",
    slug: "advanced-react-hooks-patterns",
    content: `# Advanced React Hooks Patterns

React Hooks have revolutionized how we write React components. Here are advanced patterns I use in production applications.

## Custom Hooks

### useLocalStorage Hook
\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## Advanced Patterns

### Compound Components
Create flexible and reusable component APIs.

### Render Props with Hooks
Combine the power of render props with hooks for maximum flexibility.

## Performance Optimization

1. **useMemo for expensive calculations**
2. **useCallback for stable references**
3. **Custom hooks for logic reuse**

These patterns help create maintainable and performant React applications.`
  },
  {
    id: "web-performance-monitoring",
    title: "Web Performance Monitoring and Optimization",
    excerpt: "Learn how to monitor and optimize your web applications for better user experience and performance metrics.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Performance",
    readTime: "11 min read",
    date: "Feb 15, 2024",
    slug: "web-performance-monitoring",
    content: `# Web Performance Monitoring and Optimization

Web performance directly impacts user experience and business metrics. Here's how to monitor and optimize effectively.

## Core Web Vitals

### Largest Contentful Paint (LCP)
Measures loading performance. Should occur within 2.5 seconds.

### First Input Delay (FID)
Measures interactivity. Should be less than 100 milliseconds.

### Cumulative Layout Shift (CLS)
Measures visual stability. Should be less than 0.1.

## Monitoring Tools

### Real User Monitoring (RUM)
\`\`\`javascript
// Performance API
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.name, entry.startTime);
  }
});
observer.observe({entryTypes: ['navigation', 'resource']});
\`\`\`

## Optimization Techniques

1. **Image optimization and lazy loading**
2. **Code splitting and tree shaking**
3. **CDN and caching strategies**
4. **Critical CSS inlining**

Regular performance monitoring and optimization ensure your application delivers the best user experience.`
  }
];

export const blogCategories = ['All', 'React', 'Node.js', 'Performance', 'Architecture'];