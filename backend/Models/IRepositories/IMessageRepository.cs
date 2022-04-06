using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace welaunch_backend.Models.IRepositories
{
    public class IMessageRepository
    {
        public IEnumerable<Conversation> Conversations { get; }

    }
}
