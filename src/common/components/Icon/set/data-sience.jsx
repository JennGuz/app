/* eslint-disable react/prop-types */
import { useColorMode } from '@chakra-ui/react';

const DataSience = ({
  width, height, style,
}) => {
  const { colorMode } = useColorMode();
  return (
    <svg
      width={width || '37'}
      height={height || '37'}
      viewBox="0 0 37 37"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.5675 21.7548C22.5681 21.8501 22.5693 21.944 22.5704 22.0369C22.5746 22.3854 22.5786 22.719 22.5549 23.0522C22.5508 23.1076 22.5244 23.1844 22.4817 23.2553C22.4377 23.3281 22.3884 23.3754 22.352 23.391C22.352 23.391 22.352 23.391 22.3519 23.391L22.3914 23.4829M22.5675 21.7548L15.8328 23.916C17.4384 24.3856 19.0687 24.4133 20.6962 24.0983C21.2003 24.0007 21.6855 23.7896 22.1643 23.5813C22.2401 23.5483 22.3158 23.5153 22.3914 23.4829M22.5675 21.7548C19.9513 22.6528 17.3743 22.6594 14.78 21.7654M22.5675 21.7548L14.78 21.7654M22.3914 23.4829C22.5205 23.4275 22.6437 23.2102 22.6546 23.0593L22.3914 23.4829ZM14.78 21.7654V22.5197C14.78 22.7467 14.784 22.9159 14.802 23.0492C14.8198 23.1812 14.8505 23.2703 14.8991 23.3407C14.9477 23.411 15.0204 23.4714 15.1377 23.535C15.2563 23.5992 15.4135 23.6631 15.6262 23.7438C15.7023 23.7724 15.7804 23.797 15.8603 23.8199L15.8609 23.82C17.4493 24.2846 19.0634 24.3125 20.6772 24.0001L14.78 21.7654ZM14.78 18.5872C14.7467 18.5733 14.7134 18.5591 14.68 18.5446V19.3392C14.68 20.274 14.7311 20.3469 15.6148 20.6757C15.6569 20.6914 15.6999 20.7039 15.743 20.7164C15.7581 20.7208 15.7732 20.7252 15.7883 20.7297C17.3173 21.2014 18.8799 21.2394 20.4388 20.9769M14.78 18.5872V19.3392C14.78 19.5737 14.7834 19.7472 14.801 19.8833C14.8185 20.018 14.849 20.1074 14.898 20.1774C14.947 20.2474 15.0209 20.3074 15.1424 20.3711C15.265 20.4354 15.428 20.4995 15.6497 20.582M14.78 18.5872C16.0684 19.1258 17.3691 19.2795 18.6825 19.2766C19.9939 19.2738 21.2925 19.1126 22.5667 18.58M14.78 18.5872V18.4787C16.0645 19.0236 17.3637 19.1795 18.6823 19.1766C19.9988 19.1738 21.296 19.0103 22.5663 18.4717C22.5664 18.5081 22.5665 18.5442 22.5667 18.58M15.6497 20.582C15.6497 20.582 15.6497 20.582 15.6496 20.582L15.6151 20.6748L15.6497 20.582ZM15.6497 20.582C15.6881 20.5963 15.726 20.6073 15.7679 20.6195C15.7836 20.624 15.7999 20.6288 15.8171 20.6339L15.8178 20.6341C17.3293 21.1005 18.8758 21.1386 20.4221 20.8783M20.4221 20.8783L20.4388 20.9769M20.4221 20.8783C20.4222 20.8783 20.4222 20.8783 20.4222 20.8783L20.4388 20.9769M20.4221 20.8783C20.9384 20.7913 21.4366 20.5961 21.9429 20.3979C22.0693 20.3484 22.1961 20.2987 22.3238 20.2505M20.4388 20.9769C20.9662 20.888 21.4768 20.688 21.984 20.4892C22.1092 20.4402 22.2343 20.3912 22.3593 20.344M22.3593 20.344L22.3238 20.2505M22.3593 20.344C22.4898 20.2944 22.6422 20.1056 22.6524 19.9707C22.6776 19.6167 22.6737 19.2606 22.6695 18.8817C22.6683 18.7691 22.6671 18.6546 22.6665 18.5376C22.6333 18.552 22.6 18.5661 22.5667 18.58M22.3593 20.344L22.324 20.2504C22.3239 20.2505 22.3239 20.2505 22.3238 20.2505M22.3238 20.2505C22.366 20.2345 22.4231 20.1896 22.4726 20.1272C22.5226 20.0642 22.5497 20.0022 22.5527 19.9633M22.5527 19.9633C22.5527 19.9634 22.5527 19.9635 22.5527 19.9636L22.6523 19.9707L22.5527 19.9631C22.5527 19.9632 22.5527 19.9632 22.5527 19.9633ZM22.5527 19.9633C22.5776 19.6138 22.5737 19.2639 22.5696 18.8868C22.5685 18.7866 22.5673 18.6845 22.5667 18.58M23.9584 22.973L23.9584 22.9729C23.9398 21.9144 23.9436 20.856 23.9473 19.7965C23.9489 19.3618 23.9504 18.927 23.9504 18.492V18.4905C23.9504 18.0611 23.9496 17.6317 23.9489 17.2025C23.947 16.1134 23.945 15.0248 23.9555 13.9358V13.9358C23.9609 13.3434 23.7338 12.862 23.2483 12.5493L23.2483 12.5493C22.8413 12.2872 22.3963 12.046 21.9297 11.8965L21.9297 11.8965C20.2633 11.3629 18.5544 11.3188 16.8413 11.5573L16.8413 11.5573C16.0034 11.674 15.177 11.8741 14.4205 12.3059C14.083 12.4984 13.8203 12.7317 13.6434 13.0249C13.4664 13.3185 13.3798 13.6652 13.3835 14.0772C13.4098 17.0289 13.4112 19.9806 13.3835 22.9322C13.3794 23.3529 13.4676 23.7076 13.649 24.0058C13.8303 24.3038 14.1003 24.5381 14.4482 24.7252L14.4483 24.7252C14.7395 24.8816 15.0493 25.0169 15.3657 25.1174C17.0361 25.6489 18.7404 25.6803 20.4532 25.4559C21.3564 25.3377 22.2418 25.1229 23.0372 24.6257L23.0372 24.6257C23.3357 24.439 23.5705 24.2151 23.7286 23.9406C23.887 23.6656 23.9649 23.3458 23.9584 22.973ZM14.78 16.1915V15.4736C17.3919 16.3646 19.9503 16.3543 22.5567 15.4704C22.5576 15.5723 22.5594 15.6734 22.5611 15.7739C22.5676 16.1543 22.5739 16.5256 22.5355 16.895L22.5355 16.8951C22.5341 16.9081 22.5262 16.9307 22.5037 16.9621C22.4819 16.9924 22.4505 17.0252 22.4122 17.0575C22.3348 17.1227 22.2395 17.1777 22.1636 17.205C22.0781 17.2356 21.9928 17.2667 21.9077 17.2977C21.3996 17.4826 20.8974 17.6653 20.382 17.7449C18.8444 17.9816 17.3125 17.9542 15.8146 17.491C15.7577 17.4729 15.702 17.4546 15.6475 17.4343C15.4257 17.3512 15.2627 17.2867 15.1403 17.2223C15.019 17.1585 14.9453 17.0987 14.8967 17.029C14.8481 16.9593 14.8178 16.8702 14.8006 16.7357C14.7832 16.5997 14.78 16.4262 14.78 16.1915ZM15.7871 14.3449C15.284 14.1983 14.9985 14.0292 14.7757 13.7487C14.8118 13.7221 14.8476 13.6947 14.8826 13.668C14.9163 13.6422 14.9491 13.6172 14.9803 13.5942C15.0741 13.5254 15.1632 13.468 15.2569 13.4328L15.257 13.4328C17.5165 12.5838 19.7802 12.5817 22.038 13.4399C22.1279 13.4742 22.2135 13.5286 22.3096 13.5977C22.3401 13.6197 22.3723 13.6436 22.406 13.6686C22.4457 13.6982 22.4875 13.7293 22.5311 13.7605C22.0858 14.2117 21.5624 14.3566 21.0256 14.4737C19.2708 14.8556 17.5198 14.8508 15.7872 14.3449L15.7871 14.3449Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M15.4242 0.950694L15.4305 0.979317C15.4493 1.06537 15.4674 1.14747 15.4849 1.22661L15.4242 0.950694ZM15.4242 0.950694L15.4035 0.929984M15.4242 0.950694L15.4035 0.929984M15.4035 0.929984L15.4027 0.929255L15.364 0.890565L15.3106 0.902341C14.9983 0.971124 14.6887 1.03808 14.3813 1.10458C13.6281 1.26751 12.8879 1.42764 12.1522 1.60494L12.1521 1.60496C11.9617 1.65098 11.8256 1.75869 11.7482 1.90761C11.6724 2.05358 11.6578 2.22946 11.6884 2.40795C11.7353 2.684 11.7951 2.95835 11.8542 3.22971C11.8673 3.29011 11.8805 3.35035 11.8934 3.41043L11.8934 3.41048C11.979 3.8069 12.0659 4.20345 12.1538 4.60472C12.1985 4.80877 12.2434 5.01405 12.2887 5.22115L12.3101 5.3192L12.408 5.29745C12.8185 5.2063 13.1795 5.12609 13.5587 5.0415L13.6545 5.02013L13.6349 4.92393L13.3065 3.31202M15.4035 0.929984L13.3065 3.31202M13.3065 3.31202C18.0199 5.10574 21.9017 8.02269 25.4293 11.4654L25.4999 11.5343L25.5698 11.4646C25.8556 11.1795 26.1176 10.9175 26.4347 10.6004L26.4397 10.5954L26.5147 10.5204L26.4354 10.45C26.1213 10.1707 25.8092 9.88836 25.4969 9.60588C24.7742 8.95213 24.0508 8.29765 23.2995 7.67898M13.3065 3.31202L15.6297 1.89614C15.6384 1.93764 15.6424 1.97858 15.6457 2.02019C15.6467 2.03276 15.6476 2.04532 15.6485 2.05815C15.6507 2.08913 15.6531 2.12166 15.6569 2.15965L15.6656 2.24739L15.5796 2.26702L14.9649 2.40743M23.2995 7.67898C23.2995 7.67899 23.2995 7.679 23.2995 7.679L23.2359 7.75618L23.2995 7.67898ZM23.2995 7.67898C22.5503 7.06167 21.771 6.47858 20.99 5.89423C20.6914 5.67078 20.3925 5.44714 20.0949 5.22134M20.0949 5.22134C20.4791 5.01356 20.8666 4.80373 21.2624 4.58923L21.3474 4.54313L21.3042 4.45659C21.212 4.27216 21.1241 4.09611 21.0371 3.92166L21.034 3.91545C20.948 3.74312 20.8627 3.57227 20.7748 3.39643L20.7288 3.30436L20.6381 3.35303C20.3432 3.51127 20.0542 3.66595 19.7669 3.81968C19.5204 3.95156 19.2753 4.08274 19.0289 4.21486L18.9422 4.26135L18.9873 4.3488C19.0245 4.42101 19.0589 4.48776 19.0911 4.55014C19.0986 4.56471 19.106 4.57904 19.1133 4.59315M20.0949 5.22134C20.0658 5.19922 20.0367 5.17708 20.0076 5.15492L19.9984 5.27357C20.0305 5.25617 20.0627 5.23876 20.0949 5.22134ZM19.1133 4.59315C18.0611 4.03906 17.0085 3.48434 15.9555 2.92944C15.6253 2.75545 15.2952 2.58144 14.9649 2.40743M19.1133 4.59315C19.1416 4.64798 19.1681 4.69941 19.1933 4.74828L19.0762 4.30299C19.1133 4.37503 19.1477 4.44169 19.1799 4.50402C19.2111 4.5646 19.2403 4.62109 19.2678 4.67447C19.2163 4.64737 19.1648 4.62026 19.1133 4.59315ZM14.9649 2.40743L14.8153 2.44161L14.8291 2.33587C14.8744 2.35972 14.9197 2.38357 14.9649 2.40743Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M32.9734 12.4773L33.0004 12.5736C33.1864 12.5215 33.3722 12.4686 33.5785 12.4099C33.6156 12.3993 33.6533 12.3886 33.6918 12.3777C32.0188 17.259 29.1099 21.2496 25.6395 24.8912L25.5735 24.9605L25.6399 25.0295C25.7493 25.1432 25.8555 25.2538 25.9619 25.3644C26.1253 25.5345 26.2889 25.7047 26.4638 25.8863L26.5359 25.9611L26.6079 25.8862C30.023 22.3328 32.8521 18.4536 34.6583 13.8123C34.7456 14.0958 34.822 14.3429 34.9027 14.6032L34.9317 14.6969L35.0259 14.6697C35.2642 14.601 35.488 14.5362 35.7135 14.471C35.8612 14.4282 36.0097 14.3853 36.1634 14.3408L36.2596 14.313L36.2317 14.2169C36.1469 13.9246 36.0636 13.6352 35.981 13.3481C35.7662 12.602 35.5558 11.8711 35.3345 11.1439C35.2811 10.9679 35.1775 10.832 35.0363 10.7533C34.8952 10.6746 34.7262 10.6583 34.5517 10.7035L34.5517 10.7035C33.8878 10.8756 33.2268 11.0614 32.5538 11.2505C32.2788 11.3278 32.0017 11.4057 31.7217 11.4834L31.6247 11.5103L31.6522 11.6071C31.738 11.9088 31.817 12.1849 31.8954 12.4588C31.9238 12.5577 31.952 12.6563 31.9804 12.7557L32.0078 12.8513L32.1036 12.8244C32.2598 12.7806 32.4041 12.7403 32.5418 12.7019C32.7008 12.6576 32.851 12.6157 33.0005 12.5736L32.9734 12.4773ZM32.9734 12.4773C32.8238 12.5195 32.674 12.5613 32.5152 12.6055C32.3776 12.6439 32.2333 12.6841 32.0765 12.7282L33.731 12.2626C33.669 12.2802 33.6091 12.2972 33.5509 12.3138C33.3447 12.3724 33.1592 12.4252 32.9734 12.4773Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M11.2891 26.5008C14.8184 29.8903 18.6978 32.7252 23.3381 34.526L26.4394 34.3409C26.4161 34.2264 26.3836 34.1135 26.3524 34.0051C26.3501 33.9974 26.3479 33.9896 26.3457 33.9818L26.3456 33.9818C26.1576 33.3288 25.9691 32.6763 25.7759 32.0077C25.7361 31.87 25.6961 31.7316 25.6559 31.5923L25.6281 31.4964L25.5321 31.524C25.2787 31.5969 25.0413 31.665 24.8089 31.7316C24.6696 31.7716 24.5321 31.811 24.394 31.8506L24.2987 31.878L24.3253 31.9736C24.3407 32.0289 24.3556 32.0828 24.3702 32.1352C24.4406 32.3881 24.5024 32.6105 24.5653 32.8329L24.5653 32.833C24.63 33.0606 24.6947 33.2878 24.7723 33.5597C19.8884 31.8866 15.9026 28.9768 12.2935 25.5432L12.2251 25.4781L12.1561 25.5428C12.0013 25.6882 11.853 25.8273 11.7062 25.965C11.5676 26.0951 11.4303 26.224 11.2899 26.3558L11.2132 26.4278L11.2891 26.5008Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M10.6947 10.662L10.7655 10.7338C10.9201 10.8908 11.0675 11.0405 11.2148 11.1902C11.3411 11.3185 11.4673 11.4467 11.5981 11.5796L11.6669 11.6494L11.5985 11.7196C8.15587 15.2471 5.23899 19.1309 3.44313 23.8441C3.75889 23.7791 4.06077 23.717 4.36174 23.6551C4.5913 23.6079 4.82034 23.5608 5.0546 23.5126L5.15091 23.4927L5.17236 23.5887C5.19497 23.6899 5.21724 23.7895 5.23942 23.8887C5.3016 24.1668 5.3631 24.4419 5.42974 24.7408L5.45162 24.8388L5.35345 24.8602C5.12388 24.9103 4.89608 24.96 4.6695 25.0094C4.16998 25.1184 3.67635 25.2261 3.18275 25.3335C3.12936 25.3451 3.07535 25.3574 3.02087 25.3698C2.86196 25.406 2.69904 25.4431 2.53579 25.468M10.6947 10.662L2.5206 25.3692M10.6947 10.662L10.6235 10.7332L10.6228 10.734L10.6223 10.7345C7.2888 14.1166 4.49493 17.8422 2.55751 22.2672M10.6947 10.662L10.6942 10.804C10.6942 10.804 10.6942 10.804 10.6942 10.804L10.6935 10.8047L10.623 10.8741C10.6233 10.8745 10.6237 10.8749 10.6241 10.8752C7.2966 14.2637 4.51526 17.9962 2.59534 22.4309C2.58233 22.3746 2.56975 22.3202 2.55751 22.2672M2.53579 25.468C2.53575 25.468 2.53571 25.468 2.53568 25.468L2.5206 25.3692M2.53579 25.468C2.53583 25.468 2.53586 25.468 2.5359 25.468L2.5206 25.3692M2.53579 25.468C2.3561 25.4958 2.18061 25.4783 2.0356 25.4008C1.88787 25.3218 1.78141 25.1855 1.73581 24.9967L1.7358 24.9967C1.55542 24.2483 1.39246 23.4952 1.22667 22.729C1.16298 22.4347 1.09887 22.1384 1.03319 21.8398L1.01161 21.7416L1.10986 21.7205C1.28938 21.682 1.46045 21.6453 1.62993 21.609C1.842 21.5635 2.05157 21.5186 2.27208 21.4712L2.36822 21.4505L2.39051 21.5463C2.44132 21.7647 2.48887 21.9703 2.54211 22.2006C2.54719 22.2226 2.55232 22.2448 2.55751 22.2672M2.5206 25.3692C2.19103 25.4202 1.91176 25.2992 1.83302 24.9733C1.65293 24.2261 1.49034 23.4747 1.32465 22.709C1.26784 22.4465 1.21067 22.1823 1.1523 21.916C1.15215 21.916 1.15201 21.916 1.15186 21.9161L1.13086 21.8183C1.13089 21.8183 1.13092 21.8183 1.13095 21.8183L1.22853 21.7968C1.22856 21.797 1.2286 21.7971 1.22863 21.7973C1.37294 21.7663 1.5125 21.7364 1.65102 21.7067C1.86308 21.6613 2.07269 21.6163 2.29311 21.5689C2.29311 21.5689 2.29311 21.5689 2.29311 21.5689C2.3439 21.7872 2.39142 21.9928 2.44466 22.2231C2.45943 22.287 2.47465 22.3528 2.4905 22.4213C2.51272 22.3699 2.53506 22.3185 2.55751 22.2672M5.33214 24.7625L5.23454 24.7843C5.23451 24.7842 5.23447 24.784 5.23444 24.7838C5.26697 24.7768 5.29954 24.7696 5.33214 24.7625ZM5.33214 24.7625L5.31084 24.6648C5.31068 24.6649 5.31053 24.6649 5.31037 24.6649C5.31757 24.6972 5.32482 24.7297 5.33214 24.7625ZM10.7644 10.8752L10.7647 10.8749L10.7644 10.8752Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M27.071 34.274H27.1562C27.3902 34.274 27.6188 34.275 27.8437 34.276C28.33 34.2782 28.7991 34.2803 29.2689 34.2718L29.269 34.2718C30.5202 34.2495 31.6892 33.9594 32.6936 33.2027C33.7863 32.3785 34.3333 31.2296 34.5324 29.8919C34.8085 28.0313 34.4711 26.2318 33.9025 24.4554C33.7422 23.9547 33.558 23.4629 33.37 22.9609C33.2827 22.7277 33.1945 22.4923 33.1075 22.2527L33.0756 22.1648L33.1612 22.1271L34.2585 21.6429L34.3572 21.5994L34.3931 21.7011C34.4914 21.979 34.5918 22.2556 34.692 22.5317C34.9199 23.1597 35.1468 23.785 35.3458 24.4175C35.7653 25.751 36.0138 27.1224 36.0197 28.5274C36.0197 28.5274 36.0197 28.5274 36.0197 28.5274L35.9197 28.5278C35.9277 30.3732 35.5318 32.094 34.2551 33.5129L27.071 34.274ZM27.071 34.274L27.0575 34.3582C27.0303 34.5276 26.9974 34.73 26.9624 34.9451C26.941 35.0768 26.9188 35.2133 26.8966 35.3499M27.071 34.274L26.8966 35.3499M26.8966 35.3499L26.8563 35.4306L26.9509 35.4735C26.9677 35.4811 26.9802 35.4878 26.9939 35.4951C27 35.4984 27.0065 35.5018 27.0136 35.5055C27.0332 35.5156 27.0622 35.5299 27.0972 35.5347C28.2761 35.6996 29.4599 35.7436 30.6447 35.5297L26.8966 35.3499Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M22.2807 4.02303L22.3577 3.97049L22.3853 4.04537C22.6147 3.96074 22.8386 3.87549 23.0593 3.79146C23.5464 3.60598 24.0179 3.42642 24.4993 3.27246C26.2638 2.7085 28.0481 2.34304 29.8989 2.59818L29.8989 2.59818C31.5227 2.82183 32.8472 3.51897 33.6739 4.97932L33.6739 4.97933C34.184 5.87996 34.4017 6.86568 34.4003 7.89896V7.89899C34.3998 8.36662 34.377 8.8323 34.3537 9.30804C34.3429 9.52938 34.3319 9.7529 34.3231 9.9798L34.3196 10.0688L34.4076 10.0825C34.5565 10.1057 34.7056 10.129 34.8562 10.1526C35.0747 10.1867 35.2964 10.2214 35.5247 10.2568L35.6229 10.272L35.6388 10.1739C35.834 8.96349 35.8741 7.78436 35.6818 6.59835C35.2185 3.74427 33.3064 1.79871 30.4692 1.28514L30.4692 1.28513C29.0713 1.03225 27.687 1.11606 26.3084 1.37198L26.3084 1.37199C24.7655 1.65885 23.2954 2.16405 21.8447 2.79756L21.7529 2.83766L21.7932 2.9294C21.843 3.04291 21.8921 3.15463 21.941 3.26584C22.0326 3.4744 22.1235 3.68113 22.2169 3.89433L22.1694 3.91184L22.28 4.02231L22.2807 4.02303Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M8.98996 34.5872L8.99311 34.6235L9.08936 35.7318L9.0977 35.8279L9.002 35.8397C7.95598 35.969 6.95735 35.8823 5.97924 35.6489C4.35298 35.2609 3.13662 34.4261 2.31978 33.2968C1.50369 32.1686 1.09051 30.7525 1.05883 29.2065M8.98996 34.5872L1.08891 27.8141C1.05883 28.2771 1.04929 28.743 1.05883 29.2065M8.98996 34.5872L8.9642 34.5614M8.98996 34.5872L8.9642 34.5614M1.05883 29.2065L1.15881 29.2045L1.05883 29.2065ZM8.9642 34.5614L8.96347 34.5607L8.93674 34.534L8.89901 34.5316C8.66504 34.517 8.43623 34.5078 8.21122 34.4988C7.73228 34.4797 7.27055 34.4612 6.81293 34.3918L6.81291 34.3918C4.97249 34.1133 3.59561 33.1954 2.87962 31.4323L2.87962 31.4322C2.42501 30.3133 2.37394 29.1332 2.47682 27.9312L2.47683 27.9312C2.49595 27.7075 2.52258 27.4854 2.5501 27.2559C2.5633 27.1458 2.5767 27.0341 2.58958 26.9196L2.60013 26.8258L2.50713 26.8099C2.31397 26.7767 2.13064 26.7454 1.95018 26.7145C1.74928 26.6802 1.55195 26.6465 1.34856 26.6115L1.2461 26.5939M8.9642 34.5614L1.2461 26.5939M1.2461 26.5939L1.23247 26.697M1.2461 26.5939L1.23247 26.697M1.23247 26.697C1.21646 26.8181 1.19862 26.9376 1.18095 27.0559M1.23247 26.697L1.18095 27.0559M1.18095 27.0559C1.1426 27.3128 1.10507 27.5641 1.08891 27.8141L1.18095 27.0559Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M1.3414 8.96456L1.33037 8.86778C1.12162 7.0377 1.4433 5.22898 2.34817 3.80025C3.2546 2.36906 4.74194 1.32646 6.84692 1.02642C7.52481 0.929582 8.21917 0.936149 8.89916 0.942581L1.3414 8.96456ZM1.3414 8.96456L1.43844 8.95607M1.3414 8.96456L1.43844 8.95607M1.43844 8.95607C1.52436 8.94855 1.61037 8.94104 1.69628 8.93353C1.9755 8.90913 2.25364 8.88482 2.52419 8.86093H2.61522L2.62037 8.76637C2.63206 8.55169 2.63927 8.3416 2.64636 8.13482C2.66168 7.68818 2.67646 7.25699 2.7348 6.82835L2.73481 6.82829C2.98564 4.9769 3.84363 3.55205 5.61206 2.79446L5.61207 2.79445M1.43844 8.95607L5.61207 2.79445M5.61207 2.79445C6.75962 2.30265 7.97033 2.24216 9.20915 2.3472L5.61207 2.79445ZM10.0355 1.03818C9.72489 0.992164 9.41697 0.946548 9.11342 0.944487L9.89238 2.41914C10.0019 2.43177 10.1133 2.44461 10.2276 2.45707L10.321 2.46725L10.337 2.3747C10.4069 1.97009 10.4704 1.60558 10.5389 1.2126L10.557 1.10878L10.4524 1.09614C10.313 1.07929 10.174 1.0587 10.0355 1.03818Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M14.8621 33.4776C14.9472 33.6652 15.033 33.8545 15.1241 34.0552V34.1963L15.2689 34.1237C15.5036 34.006 15.7356 33.8895 15.9669 33.7735C16.4105 33.5509 16.8515 33.3296 17.3039 33.1029L17.3966 33.0565L17.3469 32.9655C17.1605 32.6244 16.9938 32.3202 16.8284 32.0185C16.8107 31.9861 16.7929 31.9537 16.7752 31.9213L16.7288 31.8367L16.6426 31.88C16.3459 32.0291 16.0573 32.1742 15.772 32.3175C15.4087 32.5001 15.0508 32.68 14.6885 32.8622L14.6026 32.9053L14.6423 32.9928C14.717 33.1573 14.7893 33.3169 14.8621 33.4776Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M7.40606 22.0532C7.72417 21.8052 8.01054 21.5821 8.31942 21.3423H8.48293L8.3666 21.1833C7.91382 20.5642 7.49386 19.9897 7.06733 19.4057L7.00951 19.3265L6.9292 19.3828C6.68034 19.5571 6.44926 19.7183 6.21263 19.8835C6.12765 19.9428 6.04196 20.0026 5.95447 20.0637L5.87084 20.1221L5.93087 20.2045C6.33183 20.7553 6.71677 21.2832 7.11049 21.8231C7.16142 21.8929 7.2125 21.9629 7.26378 22.0333L7.32462 22.1167L7.40606 22.0532Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M13.284 8.40784L13.254 8.3729H13.208H13.2073H13.1687L13.1401 8.3988C12.5656 8.91941 12.0282 9.40648 11.4631 9.91908L11.3874 9.98776L11.4577 10.0619C11.5775 10.1883 11.6943 10.3114 11.8103 10.4337C11.965 10.5967 12.1183 10.7583 12.2758 10.9245L12.3429 10.9953L12.4153 10.93C12.9746 10.4254 13.5033 9.94776 14.0509 9.45266L14.1231 9.38734L14.0597 9.31339C13.8977 9.12445 13.7437 8.94465 13.5862 8.76068C13.4878 8.64577 13.388 8.52924 13.284 8.40784Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M3.07388 15.0002L2.97917 15.0433L3.02589 15.1362C3.2037 15.49 3.37799 15.8365 3.55188 16.1822C3.71726 16.511 3.88227 16.8391 4.04959 17.172L4.09613 17.2645L4.187 17.2147C4.49907 17.0437 4.77511 16.8919 5.05078 16.7403C5.1101 16.7077 5.16941 16.6751 5.22905 16.6423L5.31355 16.5958L5.2702 16.5097C5.09128 16.1542 4.91565 15.8055 4.74103 15.4588C4.58905 15.157 4.43783 14.8568 4.28586 14.5549L4.24265 14.469L4.15516 14.5088C4.0607 14.5518 3.96825 14.5938 3.8767 14.6354C3.61064 14.7563 3.35215 14.8739 3.07388 15.0002Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M31.4861 16.7636L31.4939 16.7582L31.5007 16.7515L31.5014 16.7508L31.5617 16.6905L31.5117 16.6214C31.2576 16.2704 31.0079 15.9252 30.7584 15.5803C30.567 15.3155 30.3756 15.051 30.1825 14.784L30.1221 14.7006L30.0405 14.7634L29.0963 15.4889L29.0192 15.5481L29.0763 15.6268C29.513 16.2291 29.9345 16.8103 30.3669 17.406L30.4238 17.4843L30.5039 17.43C30.6752 17.3139 30.8364 17.2044 30.9954 17.0965C31.1586 16.9857 31.3194 16.8765 31.4861 16.7636Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M21.454 28.804L21.275 28.5739V28.8153C20.9766 29.0331 20.6841 29.2464 20.3927 29.4589C20.1081 29.6664 19.8246 29.8732 19.5377 30.0825L19.4588 30.1401L19.5146 30.2204C19.7523 30.5623 19.9689 30.8737 20.1949 31.1982L20.2535 31.2823L20.3361 31.2217C20.5714 31.0492 20.8001 30.8816 21.0254 30.7165C21.4095 30.435 21.7837 30.1608 22.1633 29.8823L22.2463 29.8214L22.1831 29.7402C22.0781 29.6053 21.9782 29.4771 21.8803 29.3515C21.7369 29.1675 21.5979 28.9891 21.454 28.804Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M23.7892 28.4334L23.8625 28.3655L23.927 28.4361C24.224 28.1642 24.5121 27.9004 24.7969 27.6396C25.0648 27.3942 25.3298 27.1514 25.5968 26.9071L25.674 26.8363L25.5998 26.7624C25.5544 26.7173 25.5096 26.6727 25.4654 26.6287C25.2184 26.3829 24.9881 26.1538 24.7563 25.9225L24.6886 25.8551L24.6181 25.9196C24.0822 26.4103 23.5572 26.8908 23.0126 27.3888L22.9408 27.4544L23.0045 27.528C23.1841 27.7356 23.357 27.9351 23.5399 28.1461C23.5988 28.2141 23.6587 28.2832 23.7203 28.3542L23.7153 28.3588L23.7885 28.4327L23.7892 28.4334Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M15.6982 8.09244H15.8998L15.8395 8.01313C16.1168 7.8127 16.3905 7.61479 16.6628 7.41788C16.9561 7.20572 17.2479 6.99472 17.5409 6.78292L17.62 6.72576L17.5648 6.6453C17.3242 6.29454 17.1142 5.989 16.8896 5.66234L16.8314 5.57776L16.7484 5.6381L14.9197 6.96657L14.8369 7.02673L14.899 7.10812C15.1301 7.41108 15.3386 7.68485 15.5563 7.97107L15.3883 8.09244H15.6974H15.6982Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M27.2315 11.3297L27.1626 11.2534L27.0882 11.3244C26.8471 11.5546 26.6206 11.7708 26.3778 12.0024C26.3276 12.0503 26.2767 12.0988 26.2249 12.1483L26.2939 12.2207L26.2199 12.2879C26.429 12.5182 26.6337 12.7435 26.8373 12.9676C27.1236 13.2827 27.4078 13.5954 27.6993 13.9167L27.7645 13.9886L27.8383 13.9256C27.9237 13.8526 28.0073 13.7811 28.0899 13.7105C28.3088 13.5234 28.5208 13.342 28.741 13.1542L28.8192 13.0874L28.7502 13.0111C28.2296 12.4351 27.7382 11.8911 27.2315 11.3297Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M9.75963 22.8795L9.69393 22.8077L9.62041 22.8714C9.3319 23.1214 9.0655 23.3525 8.77272 23.6064L8.72061 23.6517L8.78613 23.7272L8.71243 23.7948C9.00495 24.1138 9.28567 24.4202 9.55922 24.7189C9.78354 24.9638 10.003 25.2035 10.2203 25.4404L10.2898 25.5162L10.3636 25.4447C10.4859 25.3261 10.6029 25.2127 10.7168 25.1023C10.888 24.9362 11.0523 24.777 11.2174 24.6171L11.2872 24.5495L11.2216 24.4778C11.1632 24.4139 11.1049 24.3501 11.0467 24.2865C10.6176 23.8171 10.1937 23.3534 9.75963 22.8795Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M2.97878 10.7726L2.95245 10.6813L2.85998 10.7029C2.66085 10.7494 2.46717 10.7944 2.26784 10.8407C2.08517 10.8831 1.89775 10.9266 1.69703 10.9734L1.71973 11.0708L1.6238 11.099C1.71666 11.4144 1.80603 11.7183 1.8943 12.0185C1.98962 12.3427 2.08365 12.6624 2.1794 12.9875L2.2092 13.0887L2.30865 13.0535C2.60661 12.9482 2.87118 12.8544 3.13071 12.7624C3.22879 12.7276 3.32614 12.6931 3.4243 12.6583L3.51309 12.6269L3.48698 12.5364C3.40263 12.2439 3.32138 11.9617 3.24106 11.6828C3.15347 11.3786 3.06698 11.0783 2.97878 10.7726Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M13.1155 34.9731L13.2159 34.9438L13.1821 34.8448C13.1162 34.6521 13.0549 34.4735 12.9945 34.2974C12.9295 34.1081 12.8656 33.9217 12.7978 33.7234L12.7032 33.7557L12.6754 33.6597C12.3693 33.7483 12.0744 33.8339 11.7823 33.9187C11.4891 34.0038 11.1987 34.088 10.9028 34.1737L10.8112 34.2003L10.8334 34.2931C10.9282 34.6883 11.0143 35.0464 11.1112 35.4496L11.1358 35.5516L11.2365 35.5222C11.8832 35.3333 12.4899 35.1561 13.1155 34.9731Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
      <path d="M33.7932 20.5062L32.9701 18.9621V18.8136L32.8203 18.8996C32.6486 18.9981 32.4836 19.0928 32.3206 19.1863C32.1425 19.2885 31.9667 19.3893 31.7871 19.4924L31.7028 19.5408L31.7488 19.6265C31.9704 20.0383 32.1795 20.4277 32.3905 20.8204C32.4455 20.9227 32.5005 21.0252 32.556 21.1285L32.6019 21.2139L32.6887 21.1706C33.0576 20.9869 33.39 20.8214 33.7495 20.6428L33.8416 20.597L33.7932 20.5062Z" fill="#3A3A3A" stroke="#3A3A3A" strokeWidth="0.2" />
    </svg>

  );
};

export default DataSience;
