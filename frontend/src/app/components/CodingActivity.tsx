import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Flame, Code2, GitCommit, Zap, Target } from "lucide-react";

const DEFAULT_WEEKLY = [
  { day: "Mon", problems: 0 },
  { day: "Tue", problems: 0 },
  { day: "Wed", problems: 0 },
  { day: "Thu", problems: 0 },
  { day: "Fri", problems: 0 },
  { day: "Sat", problems: 0 },
  { day: "Sun", problems: 0 },
];

const contributionData = Array.from({ length: 52 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => ({
    week,
    day,
    count: Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 8),
  }))
).flat();

function getContribColor(count: number) {
  if (count === 0) return "rgba(168,85,247,0.06)";
  if (count <= 2) return "rgba(168,85,247,0.25)";
  if (count <= 4) return "rgba(168,85,247,0.5)";
  if (count <= 6) return "rgba(168,85,247,0.75)";
  return "#A855F7";
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  delay,
  glow,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  delay: number;
  glow?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="p-5 rounded-2xl transition-all duration-200 cursor-default"
      style={{
        background: "rgba(13,10,37,0.6)",
        border: `1px solid ${glow ? "rgba(168,85,247,0.35)" : "rgba(168,85,247,0.15)"}`,
        backdropFilter: "blur(14px)",
        boxShadow: glow ? "0 0 30px rgba(168,85,247,0.15)" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.5)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(168,85,247,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = glow
          ? "rgba(168,85,247,0.35)"
          : "rgba(168,85,247,0.15)";
        (e.currentTarget as HTMLElement).style.boxShadow = glow
          ? "0 0 30px rgba(168,85,247,0.15)"
          : "none";
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(168,85,247,0.15)",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <Icon size={17} style={{ color: "#A855F7" }} />
        </div>
        {glow && (
          <div
            className="text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{ background: "rgba(168,85,247,0.15)", color: "#A855F7" }}
          >
            LIVE
          </div>
        )}
      </div>
      <div className="text-2xl font-black text-white mb-0.5">{value}</div>
      <div className="text-sm font-medium text-white mb-0.5">{label}</div>
      {sub && <div className="text-xs" style={{ color: "#8b7db5" }}>{sub}</div>}
    </motion.div>
  );
}

export function CodingActivity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const heatmapRef = useRef<HTMLDivElement>(null)

  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [weeklyData, setWeeklyData] = useState<{ day: string; problems: number }[]>(DEFAULT_WEEKLY);
  const [weeklyLoading, setWeeklyLoading] = useState(true);

  const [githubData, setGithubData] = useState<{ week: number; day: number; count: number; date: string }[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [githubLoading, setGithubLoading] = useState(true)
  
  useEffect(() => {
  if (heatmapRef.current) {
    heatmapRef.current.scrollLeft = heatmapRef.current.scrollWidth
  }
}, [githubData])
  useEffect(() => {
    // GitHub contributions
    fetch(
    // "https://modern-portfolio-g72z.onrender.com/api/github/contributions"
    "http://localhost:8080/api/github/contributions"
  )
      .then(res => res.json())
      .then(data => {
        const weeks = data?.data?.user?.contributionsCollection
          ?.contributionCalendar?.weeks ?? []

        const total = data?.data?.user?.contributionsCollection
          ?.contributionCalendar?.totalContributions ?? 0

        const flat = weeks.flatMap((week: any, weekIdx: number) =>
          week.contributionDays.map((day: any, dayIdx: number) => ({
            week: weekIdx,
            day: dayIdx,
            count: day.contributionCount,
            date: day.date,
          }))
        )

        setGithubData(flat)
        setTotalContributions(total)
        setGithubLoading(false)
      })
      .catch(() => setGithubLoading(false))
    // Stats fetch
    fetch(
    // "https://modern-portfolio-g72z.onrender.com/api/leetcode/stats"
    "http://localhost:8080/api/leetcode/stats"
  )
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Weekly fetch
    fetch(
    // "https://modern-portfolio-g72z.onrender.com/api/leetcode/weekly"
    "http://localhost:8080/api/leetcode/weekly"
  )
      .then((res) => res.json())
      .then((data) => {
        const calendar = JSON.parse(data.calendar) as Record<string, number>;
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const last7 = Array.from({ length: 7 }, (_, i) => {
          const d = new Date();
          d.setDate(d.getDate() - (6 - i));
          d.setHours(0, 0, 0, 0);

          const timestamp = Math.floor(d.getTime() / 1000).toString();
          const count =
            calendar[timestamp] ??
            calendar[String(Number(timestamp) - 86400)] ??
            calendar[String(Number(timestamp) + 86400)] ??
            0;

          return { day: dayNames[d.getDay()], problems: count };
        });

        setWeeklyData(last7);
        setWeeklyLoading(false);
      })
      .catch(() => {
        setWeeklyData(DEFAULT_WEEKLY);
        setWeeklyLoading(false);
      });
  }, []);

  // Safe — weeklyData always has default value, never null
  const weeklyTotal = weeklyData.reduce((sum, d) => sum + d.problems, 0);

  // Highlight the max bar
  const maxProblems = Math.max(...weeklyData.map((d) => d.problems));

  const difficultyData = stats
    ? [
      { label: "Easy", count: stats.easy, total: stats.totalSolved, color: "#10b981" },
      { label: "Medium", count: stats.medium, total: stats.totalSolved, color: "#A855F7" },
      { label: "Hard", count: stats.hard, total: stats.totalSolved, color: "#ef4444" },
    ]
    : [];

  return (
    <section id="activity" className="py-24 px-4 relative">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #A855F7, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
            style={{
              color: "#A855F7",
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
          >
            Coding Activity
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Activity Dashboard</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            Real-time metrics from LeetCode and GitHub — proof of consistent practice.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard icon={Flame} label="Current Streak" value={loading ? "..." : `${stats?.streak ?? 0} days`} delay={0.1} glow />
          <StatCard icon={Code2} label="Problems Solved" value={loading ? "..." : `${stats?.totalSolved ?? 0}`} delay={0.15} />
          <StatCard icon={Target} label="Easy" value={loading ? "..." : `${stats?.easy ?? 0}`} delay={0.25} />
          <StatCard icon={Zap} label="Medium" value={loading ? "..." : `${stats?.medium ?? 0}`} delay={0.3} />
          <StatCard icon={GitCommit} label="Hard" value={loading ? "..." : `${stats?.hard ?? 0}`} delay={0.35} />
        </div>

        {/* Weekly chart + contribution heatmap */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl flex flex-col"
            style={{
              background: "rgba(13,10,37,0.6)",
              border: "1px solid rgba(168,85,247,0.15)",
              backdropFilter: "blur(14px)",
              minHeight: "280px",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm font-semibold text-white">Weekly Activity</div>
                <div className="text-xs mt-0.5" style={{ color: "#8b7db5" }}>
                  Problems solved per day
                </div>
              </div>
              <div
                className="text-xs px-2 py-1 rounded-lg font-mono"
                style={{ background: "rgba(168,85,247,0.1)", color: "#A855F7" }}
              >
                {weeklyLoading ? "..." : `${weeklyTotal} this week`}
              </div>
            </div>

            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barSize={28}>
                  <XAxis
                    dataKey="day"
                    tick={{ fill: "#8b7db5", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0d0a25",
                      border: "1px solid rgba(168,85,247,0.3)",
                      borderRadius: 10,
                      color: "#f0eeff",
                      fontSize: 12,
                    }}
                    cursor={false}
                  />
                  <Bar dataKey="problems" radius={[6, 6, 0, 0]}>
                    {weeklyData.map((d, i) => (
                      <Cell
                        key={i}
                        fill={d.problems === maxProblems && maxProblems > 0
                          ? "#A855F7"
                          : "rgba(168,85,247,0.35)"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* GitHub contribution heatmap — still static, will update with GitHub API */}
          {/* GitHub contribution heatmap */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl flex flex-col"
            style={{
              background: "rgba(13,10,37,0.6)",
              border: "1px solid rgba(168,85,247,0.15)",
              backdropFilter: "blur(14px)",
              minHeight: "280px",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm font-semibold text-white">GitHub Contributions</div>
                <div className="text-xs mt-0.5" style={{ color: "#8b7db5" }}>
                  {githubLoading ? "Loading..." : `${totalContributions} contributions in the last year`}
                </div>
              </div>
              <div
                className="text-xs px-2 py-1 rounded-lg font-mono"
                style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}
              >
                Active
              </div>
            </div>

            {/* Heatmap */}
            <div className="flex-1 flex flex-col justify-center">
              <div
                ref={heatmapRef}
                className="overflow-x-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style>{`.heatmap-scroll::-webkit-scrollbar { display: none; }`}</style>
                <div className="heatmap-scroll flex gap-[3px]" style={{ minWidth: 520 }}>
                  {Array.from({ length: 52 }, (_, week) => (
                    <div key={week} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }, (_, day) => {
                        const entry = githubData.find(d => d.week === week && d.day === day)
                        return (
                          <div
                            key={day}
                            className="w-[10px] h-[10px] rounded-sm transition-colors duration-100"
                            style={{ background: getContribColor(entry?.count ?? 0) }}
                            title={entry ? `${entry.date}: ${entry.count}` : ""}
                          />
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs" style={{ color: "#8b7db5" }}>Less</span>
                {[0, 2, 4, 6, 8].map((v) => (
                  <div key={v} className="w-3 h-3 rounded-sm" style={{ background: getContribColor(v) }} />
                ))}
                <span className="text-xs" style={{ color: "#8b7db5" }}>More</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Difficulty breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 p-6 rounded-2xl"
          style={{
            background: "rgba(13,10,37,0.6)",
            border: "1px solid rgba(168,85,247,0.15)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="text-sm font-semibold text-white mb-4">Difficulty Breakdown</div>
          <div className="space-y-3">
            {difficultyData.map(({ label, count, total, color }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-14 text-xs font-medium" style={{ color }}>{label}</div>
                <div
                  className="flex-1 h-2 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${total > 0 ? (count / total) * 100 : 0}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: color }}
                  />
                </div>
                <div className="text-xs font-mono w-8 text-right text-white">{count}</div>
              </div>
            ))}
          </div>

          {/* Recent solves */}
          {stats?.recentSubmissions?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white mb-3">Recent Solves</h3>
              <div className="space-y-2">
                {stats.recentSubmissions.map((problem: any) => (
                  <div
                    key={problem.titleSlug}
                    className="p-3 rounded-xl text-sm text-white"
                    style={{
                      background: "rgba(168,85,247,0.08)",
                      border: "1px solid rgba(168,85,247,0.15)",
                    }}
                  >
                    {problem.title}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}